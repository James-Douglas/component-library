import { getBreakpoint, isDesktop } from '../breakpoint';

jest.mock('../screens', () => ({
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1900px',
}));

let windowSpy;
const customBreakpoints = {
  xs: 300,
  sm: 600,
  md: 900,
  lg: 1200,
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
    expect(getBreakpoint()).toEqual('xs');
  });
  it('returns sm for sm screen', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 577,
    }));
    expect(getBreakpoint()).toEqual('sm');
  });
  it('returns md for md screen', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 769,
    }));
    expect(getBreakpoint()).toEqual('md');
  });
  it('returns lg for lg screen', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 993,
    }));
    expect(getBreakpoint()).toEqual('lg');
  });
  it('returns xl for xl screen', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 1201,
    }));
    expect(getBreakpoint()).toEqual('xl');
  });
  it('returns xs for xs screen, when customBreakpoints provided', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 200,
    }));
    expect(getBreakpoint(customBreakpoints)).toEqual('xs');
  });
  it('returns sm for sm screen, when customBreakpoints provided', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 301,
    }));
    expect(getBreakpoint(customBreakpoints)).toEqual('sm');
  });
  it('returns md for md screen, when customBreakpoints provided', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 601,
    }));
    expect(getBreakpoint(customBreakpoints)).toEqual('md');
  });
  it('returns lg for lg screen, when customBreakpoints provided', () => {
    windowSpy.mockImplementation(() => ({
      innerWidth: 901,
    }));
    expect(getBreakpoint(customBreakpoints)).toEqual('lg');
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
