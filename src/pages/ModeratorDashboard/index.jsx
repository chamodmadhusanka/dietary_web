import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import HeightBox from "../../components/HeightBox";
import ModeratorNavBar from "../../components/ModeratorNavBar";
import FoodRequestCard from "../../components/FoodRequestCard";
import MarkedFoodCard from "../../components/MarkedFoodCard";
import foodImg from "../../assets/food1.jpg";
import "./index.css";

export default function ModeratorDashboard() {
  return (
    <div className="backContainer">
      <ModeratorNavBar />
      <HeightBox height={10} />
      <Box
        sx={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 5,
          borderRadius: 5,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="left"
          sx={{
            // fontFamily: "Oswald",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "inherit",
          }}
        >
          Food Requests
        </Typography>
        <Box
          className="requestContainer"
          sx={{
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            sx={{
              fontWeight: 550,
              color: "#757575",
            }}
          >
            Recent Food Requests
          </Typography>

          <FoodRequestCard
            foodName="Rice"
            calories={34.5}
            description="Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  AntarcticaThe compiler will create another file named
                  Simple.class, which contains the translated Java byte code.
                  This file can be executed with the following command:"
            foodImage={foodImg}
          />
          <FoodRequestCard
            foodName="Rice"
            calories={34.5}
            description="Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  AntarcticaThe compiler will create another file named
                  Simple.class, which contains the translated Java byte code.
                  This file can be executed with the following command:"
            foodImage={foodImg}
          />
          <FoodRequestCard
            foodName="Rice"
            calories={34.5}
            description="Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  AntarcticaThe compiler will create another file named
                  Simple.class, which contains the translated Java byte code.
                  This file can be executed with the following command:"
            foodImage={foodImg}
          />
          <Button size="medium">..See more</Button>
        </Box>
        <HeightBox height={30} />
        <Box
          className="requestContainer"
          sx={{
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            sx={{
              fontWeight: 550,
              color: "#757575",
            }}
          >
            Marked Food Requests
          </Typography>
          <MarkedFoodCard
            foodName="Rice"
            calories={34.5}
            description="Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  AntarcticaThe compiler will create another file named
                  Simple.class, which contains the translated Java byte code.
                  This file can be executed with the following command:"
            foodImage={foodImg}
            isApproved={true}
          />
          <MarkedFoodCard
            foodName="Rice"
            calories={34.5}
            description="Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  AntarcticaThe compiler will create another file named
                  Simple.class, which contains the translated Java byte code.
                  This file can be executed with the following command:"
            foodImage={foodImg}
            isApproved={false}
          />
          <MarkedFoodCard
            foodName="Rice"
            calories={34.5}
            description="Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  AntarcticaThe compiler will create another file named
                  Simple.class, which contains the translated Java byte code.
                  This file can be executed with the following command:"
            foodImage={foodImg}
            isApproved={true}
          />
          <Button size="medium">..See more</Button>
        </Box>
        <HeightBox height={30} />
      </Box>
    </div>
  );
}
