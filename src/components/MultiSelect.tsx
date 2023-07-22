import React, { useEffect, useState, useCallback } from "react";
import Multiselect from "multiselect-react-dropdown";
import { data_new } from "../Assets/Dataset_small";
import { useDispatch, useSelector } from "react-redux";
import { select, unselect } from "../features/sortSlice";
import { RootState, AppDispatch } from "../store";

interface Option {
  number: number;
  key: string;
  name: string;
}

interface MultiSelectProps {
  options: any;
  name: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, name }) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const selecter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();

  const handleSelect = useCallback(
    (selectedList: any, selectedItem: Option) => {
      setSelectedOptions(selectedList);
      selectedList[0].name = name;
      dispatch(select(selectedList[0]));
    },
    []
  );
  const handleRemove = useCallback((selectedList: any, removedItem: Option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((option) => option.key !== removedItem.key)
    );
    dispatch(unselect(removedItem));
  }, []);
  return (
    <div>
      <Multiselect
        placeholder={name}
        displayValue="number"
        selectedValues={selectedOptions}
        onRemove={handleRemove}
        onSelect={handleSelect}
        options={options}
        showCheckbox
      />
    </div>
  );
};

export default MultiSelect;
