import { getBreakpoint, isDesktop } from '../breakpoint';

let windowSpy;
const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1900,
};

beforeEach(() => {
  windowSpy = jest.spyOn(global, 'window', 'get');
});

afterEach(() => {
  windowSpy.mockRestore();
});
describe('getBreakpoint()', () => {
  it('returns xs for xs screen', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 500,
    }));
    expect(getBreakpoint(breakpoints)).toEqual('xs');
  });
  it('returns sm for sm screen', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 577,
    }));
    expect(getBreakpoint(breakpoints)).toEqual('sm');
  });
  it('returns md for md screen', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 769,
    }));
    expect(getBreakpoint(breakpoints)).toEqual('md');
  });
  it('returns lg for lg screen', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 993,
    }));
    expect(getBreakpoint(breakpoints)).toEqual('lg');
  });
  it('returns xl for xl screen', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 1201,
    }));
    expect(getBreakpoint(breakpoints)).toEqual('xl');
  });
});

describe('isDesktop()', () => {
  it('returns true when breakpoint is xl', () => {
    expect(isDesktop('xl')).toBeTruthy();
  });
  it('returns true when breakpoint is lg', () => {
    expect(isDesktop('lg')).toBeTruthy();
  });
  it('returns true when breakpoint is md', () => {
    expect(isDesktop('md')).toBeTruthy();
  });
  it('returns false when breakpoint is sm', () => {
    expect(isDesktop('sm')).toBeFalsy();
  });
  it('returns false when breakpoint is xs', () => {
    expect(isDesktop('xs')).toBeFalsy();
  });
});
