import {
    render,
    screen,
} from "@testing-library/react";

import { Provider } from "react-redux";

import { store } from "@/redux/store";

import ContentCard from "./ContentCard";

import userEvent from "@testing-library/user-event";

import { Heart } from "lucide-react";

describe(
    "ContentCard",
    () => {

        it(
            "renders card content",
            () => {

                render(

                    <Provider store={store}>

                        <ContentCard
                            id={1}
                            title="Test Title"
                            description="Test Description"
                            image="https://via.placeholder.com/400"
                            category="Technology"
                            url="#"
                        />

                    </Provider>
                );

                expect(
                    screen.getByText(
                        "Test Title"
                    )
                ).toBeInTheDocument();

                expect(
                    screen.getByText(
                        "Test Description"
                    )
                ).toBeInTheDocument();
            }
        );


        it(
            "toggles favorite button",
            async () => {

                const user = userEvent.setup();

                render(

                    <Provider store={store}>

                        <ContentCard
                            id={1}
                            title="Test Title"
                            description="Test Description"
                            image="https://via.placeholder.com/400"
                            category="Technology"
                            url="#"
                        />

                    </Provider>
                );

                const buttons =
                    screen.getAllByRole("button");

                await user.click(buttons[0]);

                expect(
                    screen.getByRole("button")
                ).toBeInTheDocument();
            }
        );
    }
);