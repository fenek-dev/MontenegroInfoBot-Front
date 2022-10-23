import { Divider } from "@mui/material";
import dayjs from "dayjs";
import _ from "lodash";
import React, { useEffect } from "react";
import { useController, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { EVENTS_ADD_PAGE } from "../../../routes/constants";
import { MenuItemArrow } from "../../common/components/Menu/MenuItemArrow";
import { MenuItemGroup } from "../../common/components/Menu/MenuItemGroup";
import { AddEventDataType } from "../../common/constants/types";

export const MainInformation = () => {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext<AddEventDataType>();

  useController({
    control,
    name: "city",
    rules: {
      required: t("is required", { name: t("City") }),
    },
  });

  useController({
    control,
    name: "date",
    rules: {
      required: t("is required", { name: t("Date") }),
    },
  });

  const date = watch("date");

  return (
    <MenuItemGroup
      title={t("Main information")}
      error={
        errors.city?.message || errors.date?.message || errors.address?.message
      }
    >
      <MenuItemArrow to={`${EVENTS_ADD_PAGE}/city`} value={t(watch("city"))}>
        {t("City")}
      </MenuItemArrow>
      <Divider />
      <MenuItemArrow
        to={`${EVENTS_ADD_PAGE}/date`}
        value={
          date ? dayjs(Number(date)).format("DD.MM.YYYY HH:mm") : undefined
        }
      >
        {t("Date")}
      </MenuItemArrow>
      <Divider />
      <MenuItemArrow
        to={`${EVENTS_ADD_PAGE}/address`}
        value={_.truncate(watch("address"), { length: 30 })}
      >
        {t("Address")}
      </MenuItemArrow>
    </MenuItemGroup>
  );
};
