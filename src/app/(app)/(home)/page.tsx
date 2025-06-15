import { getPayload } from "payload";
import configPromise from "@payload-config";

const Home = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "category",
    where: {
      parent: {
        exists: false,
      },
    },
  });

  console.log(data);

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default Home;
