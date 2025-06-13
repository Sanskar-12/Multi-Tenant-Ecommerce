import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

const Home = () => {
  return (
    <div className="flex flex-col p-4 gap-y-4">
      <div>
        <Button variant={"elevated"}>Hello</Button>
      </div>
      <div>
        <Input placeholder="Input" />
      </div>
      <div>
        <Progress value={30} />
      </div>
      <div>
        <Textarea placeholder="Textarea" />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
};

export default Home;
