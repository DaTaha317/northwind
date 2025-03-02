import {
  FlexibleColumnLayout,
  ShellBar,
  List,
  ListItemStandard,
  Bar,
  Button,
  FlexBox,
  Title,
  FlexBoxAlignItems,
  Avatar,
  Label,
  RatingIndicator,
  Card,
  CardHeader,
  Text
} from "@ui5/webcomponents-react";
import { useState } from "react";

function InvoiceContent() {
  const [layout, setLayout] = useState("OneColumn");
  //   const [selectedMovie, setSelectedMovie] = useState(movieData[0]);
  //   const [selectedCast, setSelectedCast] = useState(castData[0]);
  const onStartColumnClick = (e) => {
    // setSelectedMovie();
    // movieData.find((item) => item.movie === e.detail.item.dataset.movie)
    setLayout("TwoColumnsMidExpanded");
  };
  const onMiddleColumnClick = (e) => {
    // setSelectedCast();
    //   castData.find((item) => item.name === e.detail.item.dataset.name)
    setLayout("ThreeColumnsEndExpanded");
  };

  return (
    <FlexibleColumnLayout
      style={{
        height: "600px"
      }}
      layout={layout}
      startColumn={
        <>
          <ShellBar
            logo={
              <img src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo-Sticker.png" />
            }
            primaryTitle="Movie DB"
          />
          <List headerText="Movies" onItemClick={onStartColumnClick}>
            {/* {movieData.map((item) => (
              <ListItemStandard
                description={item.genre}
                data-movie={item.movie}
                key={item.movie}
              >
                {item.movie}
              </ListItemStandard>
            ))} */}
          </List>
        </>
      }
      midColumn={
        <>
          <Bar
            // design={BarDesign.Header}
            // startContent={<Title>{selectedMovie.movie}</Title>}
            endContent={
              <Button
                icon="decline"
                // design={ButtonDesign.Transparent}
                onClick={() => {
                  setLayout("OneColumn");
                }}
              />
            }
          />
          <FlexBox
            style={{
              padding: "0.5rem 1rem"
            }}
            alignItems={FlexBoxAlignItems.Center}
          >
            <Avatar
              icon="video"
              //   size={AvatarSize.XL}
              style={{
                marginInline: "0.5rem"
              }}
            />
            <FlexBox direction={"Column"}>
              <FlexBox>
                <Label>Movie:</Label>
                <Text
                  style={{
                    marginLeft: "2px"
                  }}
                >
                  {/* {selectedMovie.movie} */}
                </Text>
              </FlexBox>
              <FlexBox>
                <Label>Genre:</Label>
                <Text
                  style={{
                    marginLeft: "2px"
                  }}
                >
                  {/* {selectedMovie.genre} */}
                </Text>
              </FlexBox>
              <FlexBox>
                <Label>Country:</Label>
                <Text
                  style={{
                    marginLeft: "2px"
                  }}
                >
                  {/* {selectedMovie.country} */}
                </Text>
              </FlexBox>
            </FlexBox>
            <span
              style={{
                flexGrow: 1
              }}
            />
            <RatingIndicator
              style={{
                marginLeft: "100px"
              }}
              value={Math.floor(Math.random() * 5) + 1}
            />
          </FlexBox>
          <List headerText="Cast" onItemClick={onMiddleColumnClick}>
            {/* {castData.map((item) => (
              <ListItemStandard
                description={item.gender}
                data-name={item.name}
                key={item.name}
              >
                {item.name}
              </ListItemStandard>
            ))} */}
          </List>
        </>
      }
      endColumn={
        <>
          <Bar
            // design={BarDesign.Header}
            // startContent={<Title>{selectedCast.name}</Title>}
            endContent={
              <Button
                icon="decline"
                // design={ButtonDesign.Transparent}
                onClick={() => {
                  setLayout(FCLLayout.TwoColumnsMidExpanded);
                }}
              />
            }
          />
          <Card
            header={
              <CardHeader
                avatar={<Avatar icon="person-placeholder" />}
                // titleText={selectedCast.name}
                subtitleText={`age: ${Math.floor(
                  Math.random() * (75 - 18 + 1) + 18
                )}`}
                // additionalText={selectedCast.gender}
              />
            }
          >
            <div
              style={{
                padding: "1rem"
              }}
            >
              <Text>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </div>
          </Card>
        </>
      }
    />
  );
}

export default InvoiceContent;
