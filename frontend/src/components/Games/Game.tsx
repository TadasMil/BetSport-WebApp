import React from 'react'
import { useParams } from "react-router-dom";
import { Machine } from "./Machine/Machine";
import { GamesLayout } from "../UI/Layout/Games/GamesLayout";
import { TopWins } from "./TopWins/TopWins";

export const Game = () => {

    const { id } = useParams<{ id: string }>();

    switch (id) {
        case "1":
            return (
                <>
                    <TopWins />
                    <Machine />
                </>
            );
        case "2":
            return (
                <>
                    <TopWins />
                    <Machine />
                </>
            );
        case "3":
            return (
                <>
                    <TopWins />
                    <Machine />
                </>
            );
    }
}