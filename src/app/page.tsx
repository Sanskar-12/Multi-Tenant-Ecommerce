import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Home = () => {
  return (
    <div>
      <Button variant={"elevated"}>Hello</Button>
      <Input placeholder="Input" />
      <p className="text-rose-400">Hello</p>
    </div>
  );
};

export default Home;
