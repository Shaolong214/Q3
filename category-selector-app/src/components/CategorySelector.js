import React from 'react';
import { TreeSelect } from 'antd';
import { useSelector } from 'react-redux';

const { TreeNode } = TreeSelect;

const CategorySelector = ({ onSelect }) => {
  const categories = useSelector((state) => state.category.categories);

  const renderTreeNodes = (data) =>
    data.map((item) => {
      if (item.children && item.children.length > 0) {
        return (
          <TreeNode
            value={item.categoryId}
            title={item.name}
            key={item.categoryId}
          >
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          value={item.categoryId}
          title={item.name}
          key={item.categoryId}
        />
      );
    });

  return (
    <TreeSelect
      style={{ width: '100%' }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onSelect={onSelect}
    >
      {categories && categories.children
        ? renderTreeNodes(categories.children)
        : null}
    </TreeSelect>
  );
};

export default CategorySelector;
