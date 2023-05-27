import { useNavigate } from "react-router-dom";
import { IArticles } from "types";
import { motion } from "framer-motion";
import {
  Details,
  HomeButton,
  Navigate,
  Post,
  Span,
  Title,
  Picture,
  DescBlock,
  Desc,
  Link,
  LinkButton,
} from "./styles";

interface IProps {
  articles: IArticles;
}

export const ArticlesDetails = ({ articles }: IProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const { title, imageUrl, url, summary, id } = articles;
  return (
    <>
      <Navigate>
        <HomeButton onClick={handleBack}>Home</HomeButton>
        <Span>/</Span>
        <Post>Post {id}</Post>
      </Navigate>
      <Details>
        <Title>{title}</Title>
        <Picture src={imageUrl} alt={title} />
        <DescBlock>
          <Desc>{summary}</Desc>
          <LinkButton
            as={motion.div}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Link href={url}>Link to the article</Link>
          </LinkButton>
        </DescBlock>
      </Details>
    </>
  );
};
