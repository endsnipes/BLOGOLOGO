import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "../../routers";
import { IArticles } from "../../types";
import { FigCaption, Figure, FigureDate, FigureDisc, ArticlesElement, Image } from "./styles";

interface IProps {
  articles: IArticles[];
}

export const ArticlesCard = ({ articles }: IProps) => {
  return (
    <>
      {articles.map((item) => {
        return (
          <ArticlesElement key={item.id}>
            <Link to={generatePath(ROUTE.DETAILS, { id: item.id })}>
              <Figure>
                <Image src={item.imageUrl} alt={item.title} />
                <FigCaption>
                  <FigureDate>{new Date(item.publishedAt).toLocaleDateString()}</FigureDate>
                  <FigureDisc>
                    {item.title.length > 70 ? item.title.slice(0, 70) + "..." : item.title}
                  </FigureDisc>
                </FigCaption>
              </Figure>
            </Link>
          </ArticlesElement>
        );
      })}
    </>
  );
};
