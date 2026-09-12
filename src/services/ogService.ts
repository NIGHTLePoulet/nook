import type { ogMetaData, mockMetaData } from '@/types/article.types.ts'
import metaDataMock from '@/mocks/ogMetaData.mock.json'

const mock: mockMetaData = metaDataMock

export async function getOgMetadata(url: string): Promise<ogMetaData | undefined> {
  return mock[url]
}
