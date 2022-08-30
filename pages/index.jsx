import Link from "next/link";
import { useRouter } from "next/router";

// www.ourdomain.com/

const HomePage = () => {
  const router = useRouter();

  const { pathname } = router;
  console.log(router);

  return (
    <>
      <h1>HomePage</h1>
      <h3>News List</h3>

      <ul>
        <li>
          <Link href={`${pathname}news/nextjs-is-great`}>
            NextJS is a great framework
          </Link>
        </li>
        <li>
          <Link href={`${pathname}news/importantnews`}>
            Other important news
          </Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
