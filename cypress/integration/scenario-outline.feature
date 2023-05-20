Feature: Capitals
    Scenario Outline: Capitals Search
        Given visit to url
        When search capital "<capital>"
        When assert capital "<capital>"

        Examples:
            | capital | capital |
            | london  | london  |
            | paris   | paris   |
            | madrid  | madrid  |