/**
 * This script queries Nexus to see whether the version we expect to be deployed
 * actually exists. The reason this script exists is because Lerna is a little
 * fragile when it comes to pushing packages. It is possible for a deployment
 * to fail, and when that happens the Git tags are often already pushed. Lerna
 * therefore cannot recover automatically from this situation. The solution is
 * to force packages to deploy again by making a trivial whitespace change to
 * them.
 *
 * Usage:
 *   [From dir]: project root
 *   [Check if any packages are not deployed currently]:
 *     "node check-deployments.js"
 *   [Fix undeployed packages by adding whitespace to each package.json]:
 *     "node check-deployments.js --bump"
 *
 * Commit and push manually if packages need to be "bumped".
 */
const fs = require('fs');

const registry = 'https://nexus.comparethemarket.com.au/repository/npm-all/';
const packages = fs.readdirSync('packages');
let happyOutputs = [];
let sadOutputs = [];
packages.forEach((packageDir) => {
  try {
    const packageFileName = `packages/${packageDir}/package.json`;
    const packageStr = fs.readFileSync(packageFileName);
    const packageObj = JSON.parse(packageStr);
    const packageFullName = `${packageObj.name}@${packageObj.version}`;
    const command = `npm view --registry ${registry} ${packageFullName}`;
    console.log(`running: ${command}`);
    const npmView = require('child_process')
      .execSync(command, { stdio: 'pipe' })
      .toString();
    if (!npmView.trim()) {
      sadOutputs.push({
        message: `ERROR: ${packageFullName} is not deployed!`,
        packageFileName: packageFileName,
      });
    } else {
      happyOutputs.push(`OK: ${packageFullName} seems to exist in Nexus.`);
    }
  } catch (e) {
    console.log('Error reading and parsing package.json');
    console.log(e);
  }
});

console.log(happyOutputs.join('\n'));
console.log(sadOutputs.map((sadOutput) => sadOutput.message).join('\n'));

if (process.argv[2] === '--bump') {
  console.log('Beginning bump of all ERROR package JSONs');
  const sadPackageFileNames = sadOutputs.map(
    (sadOutput) => sadOutput.packageFileName
  );
  sadPackageFileNames.forEach((sadPackageFileName) => {
    try {
      const packageStr = fs.readFileSync(sadPackageFileName);
      fs.writeFileSync(sadPackageFileName, `${packageStr}\n`);
      console.log(`Added whitespace to ${sadPackageFileName}`);
    } catch (e) {
      console.log(e);
    }
  });
}
