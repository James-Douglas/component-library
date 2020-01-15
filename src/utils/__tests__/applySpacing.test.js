import applySpacing, { spacingPropTypes } from '../applySpacing';

describe('applySpacing()', () => {
  it('applies spacing from an array to a css margin declaration', () => {
    const result = applySpacing('margin', ['24']);
    expect(result).toEqual('margin: 2.4rem');
  });

  it('applies spacing from an array with multiple values to a css margin declaration', () => {
    const result = applySpacing('margin', ['24', '4', '8', '16']);
    expect(result).toEqual('margin: 2.4rem 0.4rem 0.8rem 1.6rem');
  });

  it('applies spacing from an array to a css padding declaration', () => {
    const result = applySpacing('padding', ['4']);
    expect(result).toEqual('padding: 0.4rem');
  });

  it('applies spacing from an array with multiple values to a css padding declaration', () => {
    const result = applySpacing('padding', ['20', '8', '40', '16']);
    expect(result).toEqual('padding: 2rem 0.8rem 4rem 1.6rem');
  });

  it('replaces an invalid value with 0', () => {
    const result = applySpacing('padding', ['21', '8', '40', '16']);
    expect(result).toEqual('padding: 0 0.8rem 4rem 1.6rem');
  });
});

describe('spacingPropTypes', () => {
  it('returns null if no values are passed in', () => {
    const propTest = spacingPropTypes({}, 'padding', 'test');
    expect(propTest).toEqual(null);
  });
  it('throws an error when values in the array exceed length of 4', () => {
    expect(() => {
      spacingPropTypes({ padding: ['20', '8', '40', '16', '8'] }, 'padding', 'test');
    }).toThrow('Invalid prop value (padding=[20,8,40,16,8]) supplied to test. Max array length is 4, representing each of the css values padding can receive.');
    expect(() => {
      spacingPropTypes({ padding: ['8', '40', '16', '8'] }, 'padding', 'test');
    }).not.toThrow();
  });
  it('throws an error when values in the array do not match the internal theme', () => {
    expect(() => {
      spacingPropTypes({ padding: ['2', '8', '40', '16'] }, 'padding', 'test');
    }).toThrow('Invalid prop value (padding=[2,8,40,16]) supplied to test. Each array item must be a multiple of 4, which is a key for the internal manor spacing.');
    expect(() => {
      spacingPropTypes({ padding: ['4', '8', '40', '16'] }, 'padding', 'test');
    }).not.toThrow('Invalid prop value (padding=[2,8,40,16]) supplied to test. Each array item must be a multiple of 4, which is a key for the internal manor spacing.');
  });
});
