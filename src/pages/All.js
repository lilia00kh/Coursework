import ImgMediaCard from "../Todo/ImgMediaCard";
import React from "react";
import CustomizedTooltips from "../Todo/CustomizedTooltips";
import TransitionsModal from "../Todo/TransitionsModal";
import SimpleCollapse from "../Todo/SimpleCollapse";
import SimpleAlerts from "../Todo/SimpleAlerts";
import SimpleBottomNavigation from "../Todo/SimpleBottomNavigation";
import Icons from "../Todo/Icons";
import HorizontalLabelPositionBelowStepper from "../Todo/HorizontalLabelPositionBelowStepper";
import SimpleTable from "../Todo/SimpleTable";
import CustomPaginationActionsTable from "../Todo/ReactVirtualizedTable";
function All(props) {
    return(
        <div>
            <Icons/>
            <HorizontalLabelPositionBelowStepper/>
            <SimpleTable/>
            <CustomPaginationActionsTable/>
            <SimpleBottomNavigation/>
            <ImgMediaCard></ImgMediaCard>
            <CustomizedTooltips/>
            <TransitionsModal/>
            <SimpleCollapse/>
            <SimpleAlerts/>
        </div>
    )
}

export default All