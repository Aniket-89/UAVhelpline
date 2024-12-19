import Input from "../Input/Input";
import Button from "../Button/Button";

const NewsletterSection = () => {
  return (
    <div className="space-x-2">
      <Input label="Enter your email..." />
      <Button styleType="solid" onClick={() => console.log("subscribed")}>
        Subscribe
      </Button>
    </div>
  );
};

export default NewsletterSection;
