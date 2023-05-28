import axios from "axios";
import { IArticles, INews } from "../types";

class NewsApi {
  private readonly BASE_URL = "https://api.spaceflightnewsapi.net/v3/";
  private readonly ENDPOINT = {
    articles: "articles",
    blogs: "blogs",
    limit: "_limit",
    title: "title_contains",
  };
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getArticles(options: number) {
    const params = {
      _limit: options,
    };
    const { data } = await this.API.get<IArticles[]>(this.ENDPOINT.articles, { params });

    return data;
  }
  public async getNews(options: number) {
    const params = {
      _limit: options,
    };
    const { data } = await this.API.get<INews[]>(this.ENDPOINT.blogs, { params });

    return data;
  }
  public async getArticlesById(id: string) {
    const { data } = await this.API.get<IArticles>(`${this.ENDPOINT.articles}/${id}`);

    return data;
  }
  public async getNewsById(id: number) {
    const params = {
      _limit: 12,
    };
    const { data } = await this.API.get<INews[]>(`${this.ENDPOINT.blogs}/${id}`, { params });

    return data;
  }
}

export const newsAPI = new NewsApi();
