import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Toggle, {
  getAlignment, getTypeClasses, getPictureToggleContent, getIconToggleContent, getTextToggleContent, getToggleContent,
} from '../Toggle.component';

describe('getAlignment()', () => {
  it('returns empty string when no alignment option given', () => {
    expect(getAlignment({})).toEqual('');
  });

  it('returns align class when alignment given', () => {
    expect(getAlignment({ align: 'right' })).toEqual('align-right');
  });
});

describe('getTypeClasses()', () => {
  it('returns square-toggle when type is square', () => {
    expect(getTypeClasses('square', {})).toEqual('square-toggle');
  });

  it('returns rect-toggle when type is rectangle', () => {
    expect(getTypeClasses('rectangle', { align: 'right' })).toEqual('rect-toggle align-right');
  });
});

describe('getPictureToggleContent()', () => {
  // eslint-disable-next-line react/prop-types
  const PictureToggleContentContainer = ({ pictureOptions, label }) => (
    <>
      {getPictureToggleContent(pictureOptions, label)}
    </>
  );

  it('renders with props', () => {
    const pictureOptions = {
      src: '/test/test.jpg',
      alt: 'test alt',
      title: 'test title',
    };

    const { getByText, container } = render(<PictureToggleContentContainer pictureOptions={pictureOptions} label="test label" />);
    expect(getByText('test label')).toBeInTheDocument();
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', '/test/test.jpg');
    expect(img).toHaveAttribute('alt', 'test alt');
    expect(img).toHaveAttribute('title', 'test title');
  });
});

describe('getIconToggleContent()', () => {
  // eslint-disable-next-line react/prop-types
  const IconToggleContentContainer = ({ icon, iconSize, label }) => (
    <>
      {getIconToggleContent(icon, iconSize, label)}
    </>
  );

  it('renders with props', () => {
    const { getByText, container } = render(<IconToggleContentContainer icon="info" iconSize={4} label="test" />);
    expect(getByText('test')).toBeInTheDocument();
    expect(container.querySelector('.icon')).toBeInTheDocument();
  });
});

describe('getTextToggleContent()', () => {
  // eslint-disable-next-line react/prop-types
  const TextToggleContentContainer = ({ type, rectOptions, label }) => (
    <>
      {getTextToggleContent(type, rectOptions, label)}
    </>
  );

  it('returns square content', () => {
    const { getByText, container } = render(<TextToggleContentContainer type="square" label="test square" />);
    expect(getByText('test square')).toBeInTheDocument();
    expect(container.querySelector('.square-toggle')).toBeInTheDocument();
  });

  it('returns rectangle content', () => {
    const rectOptions = {
      align: 'left',
    };
    const { getByText, container } = render(<TextToggleContentContainer type="rectangle" rectOptions={rectOptions} label="test rectangle" />);
    expect(getByText('test rectangle')).toBeInTheDocument();
    const wrapper = container.querySelector('.rect-toggle');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass('align-left');
  });
});

describe('getToggleContent()', () => {
  const ToggleContentContainer = ({
    // eslint-disable-next-line react/prop-types
    icon, iconSize, pictureOptions, autofill, dirty, id, type, rectOptions, label,
  }) => (
    <>
      {getToggleContent(icon, iconSize, pictureOptions, autofill, dirty, id, type, rectOptions, label)}
    </>
  );

  it('returns picture content when pictureOptions present', () => {
    const pictureOptions = {
      src: '/test/test.jpg',
      alt: 'test alt',
      title: 'test title',
    };
    const { getByText, container } = render(<ToggleContentContainer pictureOptions={pictureOptions} label="test picture" />);
    expect(getByText('test picture')).toBeInTheDocument();
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', '/test/test.jpg');
    expect(img).toHaveAttribute('alt', 'test alt');
    expect(img).toHaveAttribute('title', 'test title');
  });

  it('returns icon content when icon provided', () => {
    const { getByText, container } = render(<ToggleContentContainer icon="info" iconSize={4} label="test" />);
    expect(getByText('test')).toBeInTheDocument();
    expect(container.querySelector('.icon')).toBeInTheDocument();
  });

  it('returns (square) text content when no picture or icon provided', () => {
    const { getByText, container } = render(<ToggleContentContainer type="square" label="test square" />);
    expect(getByText('test square')).toBeInTheDocument();
    expect(container.querySelector('.square-toggle')).toBeInTheDocument();
  });

  it('returns (rect) text content when no picture or icon provided', () => {
    const rectOptions = {
      align: 'left',
    };
    const { getByText, container } = render(<ToggleContentContainer type="rectangle" rectOptions={rectOptions} label="test rectangle" />);
    expect(getByText('test rectangle')).toBeInTheDocument();
    const wrapper = container.querySelector('.rect-toggle');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass('align-left');
  });
});

describe('Toggle', () => {
  it('renders with props', () => {
    const { container } = render(<Toggle label="test label" id="test-id" />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('calls handleChange on handleChange when provided', () => {
    const handleChangeCb = jest.fn();
    const { container } = render(<Toggle label="test label" id="test-id" onToggle={handleChangeCb} />);
    const element = container.querySelector('.toggle');
    fireEvent.click(element);
    expect(handleChangeCb).toHaveBeenCalled();
    expect(handleChangeCb.mock.calls[0][0]).toEqual({ id: 'test-id', value: '' });
  });
});
