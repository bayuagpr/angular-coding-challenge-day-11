import { ShortDatePipe } from './short-date.pipe';

describe('ShortDatePipe: Solution', () => {
  let pipe: ShortDatePipe;

  beforeEach(() => {
    pipe = new ShortDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not throw error', () => {
    expect(() => {
      pipe.transform('1972-08-23T15:22:34.694Z');
    }).not.toThrow();
  });

  it('returned value should contain date format dd/mm/yyyy', () => {
    const isoString = '1960-06-01T11:01:12.720Z';
    expect(pipe.transform(isoString)).toContain('06/01/1960');
  });

});
