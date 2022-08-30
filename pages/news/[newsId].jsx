import { useRouter } from "next/router";

// ------  Nested Paths & Pages (Nested Routes)  ------

// www.ourdomain.com/news/detailpage

const newsArrFromDataBase = [];

const DetailPage = () => {
  const router = useRouter();

  // ---- 👇 holds the dynamic parameter entered in the URL, for the '[newsId]' dynamic segment.
  const newsId = router.query.newsId;

  /* after that we can: 
      1. send a request to the backend API to fetch the news item with newsId
  */

  // ----  example of getting a certain news data from the fetched Array of ALL the news, by using the dynamic parameter entered in the URL.
  const detailData = newsArrFromDataBase.filter((item) => item.id === newsId);

  console.log(router);
  console.log(newsId);

  return <h1>VERY Important News</h1>;
};

export default DetailPage;
