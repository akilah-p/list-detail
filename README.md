# Plan

### HTML

-   on home page
    -   div to hold list of items
        -render each item once it's fetched from supabase (not hard coded)
-   on detail page
    -section and div container for details
    -in header, link to home page\

              ### Events

              -home page LOAD
              -fetch all of the items from supabase
              -DISPLAY all items
                  - loop through, render, and append to container

    -detail page LOAD
    -fetch single item from supabase(by id)
    -Render to page based on items info + use URLSearch Params to get the item's id

              ###Functions
              -fetch-utils -> getITem, getItemById
              -render-utils ->, renderItemCard, renderItemDetail

              ### SLices
              1. get all items to render to home page on load
              2. make item cards clickable and redirect to detail page
              3. get detail page to render with appropriate details (hard coded id)
              4. use URLSearchParams to fill in id dynamically.
