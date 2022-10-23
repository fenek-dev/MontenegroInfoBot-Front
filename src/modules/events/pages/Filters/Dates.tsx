import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { ListForm } from "../../../common/forms/ListForm";
import { useBackButton } from "../../../common/hooks/useBackButton";
import { useDispatchActionFn } from "../../../common/hooks/useDispatchActionFn";
import { selectFilters } from "../../reducers/filter/filter.selector";
import { setFilter } from "../../reducers/filter/filter.slice";
import { INCREASE_DECREASE_TYPE } from "../../reducers/filter/filter.types";

export const Dates = () => {
  useBackButton(true);
  const { byDate } = useSelector(selectFilters);

  const onChange = useDispatchActionFn<string>((value) =>
    setFilter({
      key: "byDate",
      value:
        byDate === value
          ? undefined
          : _.find(INCREASE_DECREASE_TYPE, (item) => item.value === value)
              ?.value,
    })
  );
  return (
    <ListForm
      list={_.map(INCREASE_DECREASE_TYPE, (item) => item.value)}
      checkList={byDate ? [byDate] : []}
      onChange={onChange}
    />
  );
};

export default Dates;
