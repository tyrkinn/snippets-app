import React from "react";
import { List, ListItem, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useStore } from "../../store";
import { CategoryAddField } from "./CategoryAddField";
import { CategoryItem } from "./CategoryItem";

const CategoryList = () => {

  const categoryList = useStore(state => state.categoryList);

  return (
    <Grid w='full' h='full' bgColor='white' rounded='lg' p={5} templateColumns='1fr' templateRows='1fr 1fr 7fr'>
      <GridItem>
        <Heading size='md'>Categories</Heading>
      </GridItem>
      <GridItem>
        <CategoryAddField />
      </GridItem>
      <GridItem>
        <List>
          {categoryList.map((c) => (
            <ListItem key={c.id}>
              <CategoryItem item={c} />
            </ListItem>
          ))}
        </List>
      </GridItem>
    </Grid>
  );
};

export default CategoryList;
