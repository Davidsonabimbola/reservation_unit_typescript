import * as mathUtils from '../app/mathUtils'; // Import the entire module

jest.mock('../app/mathUtils'); // Mock the entire module

describe('mocked add function', () => {
  beforeEach(() => {
    // Override the implementation of add
    (mathUtils.add as jest.Mock).mockImplementation(() => 10);
  });

  afterEach(() => {
    jest.resetAllMocks(); // Reset all mocks after each test
  });

  test('should always return 10 when add is called', () => {
    expect(mathUtils.add(2, 3)).toBe(10); // Should return 10
    expect(mathUtils.add(100, 200)).toBe(10); // Should still return 10
    expect(mathUtils.add(-5, -5)).toBe(10); // Should still return 10
  });

  test('should ensure add was called with the correct arguments', () => {
    mathUtils.add(4, 6);
    expect(mathUtils.add).toHaveBeenCalledWith(4, 6); // Verify arguments
  });
});

