const { pickQuote, isFriday, buildMessage, QUOTES } = require('../src/index');

describe('Wu-Tang Build Blessing', () => {
  describe('pickQuote', () => {
    test('returns a string from the QUOTES array', () => {
      const quote = pickQuote();
      expect(typeof quote).toBe('string');
      expect(QUOTES).toContain(quote);
    });

    test('always includes the canonical message in the pool', () => {
      expect(QUOTES).toContain('Wu-Tang is for the children.');
    });
  });

  describe('isFriday', () => {
    test('returns true for a known Friday', () => {
      expect(isFriday(new Date('2026-04-24T12:00:00Z'))).toBe(true);
    });

    test('returns false for a known Monday', () => {
      expect(isFriday(new Date('2026-04-20T12:00:00Z'))).toBe(false);
    });
  });

  describe('buildMessage', () => {
    test('compact style is a single line', () => {
      const msg = buildMessage('compact', 'test quote');
      expect(msg).toContain('Wu-Tang is for the children');
      expect(msg).toContain('test quote');
    });

    test('verse style includes the quote', () => {
      const msg = buildMessage('verse', 'protect ya neck');
      expect(msg).toContain('protect ya neck');
      expect(msg).toContain('Wu-Tang is for the children');
    });

    test('banner style includes ASCII art', () => {
      const msg = buildMessage('banner', 'cream');
      expect(msg).toContain('Wu-Tang is for the children');
      expect(msg).toContain('cream');
    });
  });
});