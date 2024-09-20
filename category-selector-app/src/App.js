import React from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesRequest } from "./actions/categoryActions";
import useFetchCategories from "./hooks/useFetchCategories";
import CategorySelector from "./components/CategorySelector";
import { Button, Layout, Typography, Space, message } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const dispatch = useDispatch();
  const fetchCategories = useFetchCategories();

  const handleSagaFetch = () => {
    dispatch(fetchCategoriesRequest());
  };

  const handleHookFetch = () => {
    fetchCategories();
  };

  const handleSelect = (value, node) => {
    message.success(`Selected Category: ${node.title} (ID: ${value})`);
  };

  return (
    <Layout>
      <Header>
        <Title style={{ color: "white", margin: "16px 0" }} level={3}>
          Category Selector
        </Title>
      </Header>
      <Content style={{ padding: "50px" }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Space>
            <Button type="primary" onClick={handleSagaFetch}>
              Fetch Categories with Redux-Saga
            </Button>
            <Button type="primary" onClick={handleHookFetch}>
              Fetch Categories with Custom Hook
            </Button>
          </Space>
          <CategorySelector onSelect={handleSelect} />
        </Space>
      </Content>
    </Layout>
  );
};

export default App;
