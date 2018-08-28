
let conf = require('../config/config.json');
let config = require('../lib/envfig')(conf);

describe("envfig", () => {

  beforeEach(() => {
    process.env.number = 1111;
    process.env.oNumber = 2222;
    process.env.float = 5.5;
    process.env.boolean = false;
    process.env.null = 'notNull';
  });

  it("should proxy", () => {
    expect(config.number).toBe(1111);
    expect(config.numberConfig).toBe(23432);
    expect(config.object.oNumber).toBe(2222);
    expect(config.float).toBe(5.5);
    expect(config.boolean).toBe(false);
    expect(config.null).toBe('notNull');
  });

  afterEach(() => {
    delete process.env.number;
    delete process.env.oNumber;
    delete process.env.float;
    delete process.env.boolean;
    delete process.env.null;
  });
});