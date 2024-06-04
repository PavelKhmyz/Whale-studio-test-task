import type { AsyncData } from 'nuxt/app';
import type { KeysOf, PickFrom } from '#app/composables/asyncData';
import type { $Fetch, NitroFetchRequest } from 'nitropack';
import { FetchError, type FetchOptions } from 'ofetch';

interface ISliderApi {
  GET<ApiResponse>(
    url?: string,
    params?: Record<string, string | number>,
    key?: string,
  ): Promise<AsyncData<ApiResponse | PickFrom<ApiResponse, KeysOf<ApiResponse>>, FetchError<any> | null>>;
}

class SliderApi implements ISliderApi {
  private readonly api: $Fetch<unknown, NitroFetchRequest>;

  constructor(url?: string, config?: FetchOptions) {
    this.api = $fetch.create({
      ...config,
      baseURL: url ? url : '',
    })
  }

  public async GET<ApiResponse>(
    url?: string,
    params?: Record<string, string | number>,
    key?: string,
  ): Promise<AsyncData<ApiResponse | PickFrom<ApiResponse, KeysOf<ApiResponse>>, FetchError<any> | null>> {
    return useAsyncData(
      key ? key : 'slider',
      () => this.api(
        url ? url : '',
        { method: 'GET', params },
      ),
    )
  }
}

export const sliderApi = new SliderApi(process.env.SLIDER_API_URL);
