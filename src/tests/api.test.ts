import { fetchData } from "../app/api";

global.fetch = jest.fn()

describe.only('fetchData',()=>{

    afterEach(() => {
        jest.resetAllMocks(); // Reset mocks after each test
      });

    test('should return mocked data', async()=>{
        // Typecast fetch to jest.Mock so we can use mockResolvedValue

        (fetch as jest.Mock).mockResolvedValue({

            ok: true,
            json: jest.fn().mockResolvedValue('mocked data')
        })

        const data = await fetchData();
        expect(data).toBe('mocked data');
        expect(fetch).toHaveBeenCalledTimes(1)


    })
})




  