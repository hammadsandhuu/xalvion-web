import { useUI } from "@/hooks/use-UI";
import FilterIcon from "@/components/icons/filter-icon";
import { Drawer } from "@/components/common/drawer/drawer";
import motionProps from "@/components/common/drawer/motion";
import FilterSidebar from "@/components/filter/filter-sidebar";
import cn from "classnames";
import { getDirection } from "@/utils/get-direction";
import Button from "@/components/shared/button";

interface Props {
  setViewAs?: (value: boolean) => void;
  isDesktop?: boolean;
}

const DrawerFilter: React.FC<Props> = ({ isDesktop }) => {
  const { openFilter, displayFilter, closeFilter } = useUI();
  const dir = getDirection("en");
  return (
    <>
      <div
        className={cn(
          " lg:w-[150px]   p-2 bg-white mb-[5px]",
          isDesktop ? "" : "lg:hidden"
        )}
      >
        <Button
          variant={"border"}
          className={cn("px-5 !py-2 !rounded leading-5 ")}
          onClick={openFilter}
        >
          <FilterIcon />
          <span className="text-sm ltr:pl-2.5 rtl:pr-2.5">Filter</span>
        </Button>
      </div>

      {/*TODO: multiple drawer uses throughout the app is a bad practice */}
      <Drawer
        rootClassName={"filter-drawer"}
        placement={dir === "rtl" ? "right" : "left"}
        open={displayFilter}
        onClose={closeFilter}
        {...motionProps}
      >
        <FilterSidebar />
      </Drawer>
    </>
  );
};
export default DrawerFilter;
