INSERT INTO
    next_results(circuit, driver, prediction)
VALUES
    -- bahrain
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%bahrain%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%leclerc%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%bahrain%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%sainz%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%bahrain%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%hamilton%'),
        3
    ),
    -- australia
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%australia%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%leclerc%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%australia%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%sergio%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%australia%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%russell%'),
        3
    ),
    -- spain
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%spain%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%max%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%spain%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%sergio%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%spain%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%russell%'),
        3
    ),
    -- monaco
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%monaco%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%sergio%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%monaco%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%sainz%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%monaco%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%max%'),
        3
    ),
    -- canada
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%canada%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%max%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%canada%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%sainz%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%canada%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%hamilton%'),
        3
    ),
    -- austria
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%austria%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%leclerc%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%austria%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%max%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%austria%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%hamilton%'),
        3
    ),
    -- hungary
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%hungary%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%max%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%hungary%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%hamilton%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%hungary%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%russell%'),
        3
    ),
    -- belgium
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%belgium%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%max%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%belgium%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%sergio%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%belgium%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%sainz%'),
        3
    ),
    -- netherlands
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%dutch grand prix at zandvoort%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%max%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%dutch grand prix at zandvoort%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%russell%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%dutch grand prix at zandvoort%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%leclerc%'),
        3
    ),
    -- monza
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%monza%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%max%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%monza%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%leclerc%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%monza%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%russell%'),
        3
    ),
    -- singapore
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%singapore%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%perez%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%singapore%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%leclerc%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%singapore%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%sainz%'),
        3
    ),
    -- japan
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%japan%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%max%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%japan%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%sergio%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%japan%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%leclerc%'),
        3
    ),
    -- austin
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%austin%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%max%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%austin%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%hamilton%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%austin%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%leclerc%'),
        3
    ),
    -- mexico
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%mexico%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%max%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%mexico%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%hamilton%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%mexico%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%sergio%'),
        3
    ),
    -- brazil
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%brazil%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%russell%'),
        1
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%brazil%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%hamilton%'),
        2
    ),
    (
        (SELECT id FROM circuits WHERE LOWER(description) LIKE '%brazil%'),
        (SELECT id FROM drivers WHERE LOWER(name) LIKE '%sainz%'),
        3
    );