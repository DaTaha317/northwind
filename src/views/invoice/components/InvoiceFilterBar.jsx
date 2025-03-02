import {
  FilterGroupItem,
  FilterBar,
  DynamicPage,
  DynamicPageHeader,
  Title,
  MultiInput,
  Input,
  Token
} from "@ui5/webcomponents-react";

function InvoiceFilterBar({ children }) {
  return (
    <DynamicPage
      headerArea={
        <DynamicPageHeader>
          <FilterBar
            filterContainerWidth="13.125rem"
            header={
              <Title level="H2" size="H4">
                FilterBar
              </Title>
            }
            hideToolbar
            search={<Input />}
          >
            <FilterGroupItem
              active
              filterKey="MultiInput"
              label="MultiInput"
              required
            >
              <MultiInput
                required
                tokens={
                  <>
                    <Token selected text="Argentina" />
                    <Token text="Bulgaria" />
                    <Token text="England" />
                    <Token text="Finland" />
                  </>
                }
              />
            </FilterGroupItem>
            <FilterGroupItem filterKey="Input" label="Input">
              <Input placeholder="Placeholder" />
            </FilterGroupItem>
          </FilterBar>
        </DynamicPageHeader>
      }
      style={{
        height: "800px",
        position: "relative",
        zIndex: 0
      }}
    >
      {children}
    </DynamicPage>
  );
}

export default InvoiceFilterBar;
