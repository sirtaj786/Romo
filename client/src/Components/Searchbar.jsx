import { Box, Input } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { ProductContext } from "../ContextAPI/ProductContext";
import { FilteredDataFun, getData } from "../Redux/Products/ProductActions";

const SearchBar = () => {
  const { state, dispatch } = useContext(ProductContext);
  const handleFilter = (e) => {
    if (e.target.value == null) {
      getData(dispatch);
    } else {
      const filterData = state?.data?.filter(
        (el) =>
          el.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          el.gender.toLowerCase().includes(e.target.value.toLowerCase()) ||
          el.type.toLowerCase().includes(e.target.value.toLowerCase())
      );

      FilteredDataFun(dispatch, filterData);
    }
  };
  return (
    <Box>
      <Input
        height="30px"
        width="110%"
        backgroundColor="white"
        color="black"
        placeholder="Search here"
        type="text"
        onChange={(e) => handleFilter(e)}
      />
    </Box>
  );
};

export default SearchBar;
