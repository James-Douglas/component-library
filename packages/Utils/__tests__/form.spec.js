import { getScreenReaderLabel, hasTooltipContent } from '../form';

describe('getScreenReaderLabel()', () => {
  it('returns screenReaderLabel when provided', () => {
    const expected = 'test screenreader label';
    expect(getScreenReaderLabel(expected, 'test')).toEqual(expected);
  });
  it('returns constructed screen reader label when screenReaderLabel not provided and label provided', () => {
    const label = 'First name';
    expect(getScreenReaderLabel(null, label)).toEqual('Click here for additional information about First name');
  });
  it('returns constructed screen reader label when screenReaderLabel not provided and label not provided', () => {
    const label = '';
    expect(getScreenReaderLabel(null, label)).toEqual('Click here for additional information');
  });
});

describe('hasTooltipContent()', () => {
  it('returns false when no tooltip content exists', () => {
    expect(hasTooltipContent({})).toBeFalsy();
  });
  it('returns true when tooltip content exists', () => {
    expect(hasTooltipContent({ title: 'test' })).toBeTruthy();
  });
});
