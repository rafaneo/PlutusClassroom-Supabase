import { TModularComponent } from "@/shared/types";
import RichText from "./rich-text";
import Slider from "./slider";
import LessonImage from "./image";
import BudgetMultiselect from "./budget-multiselect";

type TModularComponentProps = {
  component: TModularComponent;
};

export default function ModularComponent({
  component,
}: TModularComponentProps) {
  switch (component.type) {
    case "rich_text_block":
      return <RichText {...component.value} />;
    case "slider_block":
    // return <Slider {...component.value} />;
    // case "image_block":
    //   return <LessonImage {...component.value} />;
    case "budget_multiselect_block":
    // return <BudgetMultiselect {...component.value} />;
    default:
      return null;
  }
}
