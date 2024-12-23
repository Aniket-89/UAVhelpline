import Input from "../Input/Input";
import Button from "../Button/Button";

const NewsletterSection = () => {
  return (
    <div className="flex flex-row gap-1">
      <Input label="Enter your email..." />
      <Button styleType="solid" onClick={() => console.log("subscribed")}>
        Subscribe
      </Button>
    </div>
  );
};

export default NewsletterSection;
