<?php
/**
 * @return array
 */
function getLeagueChamps()
{
    return [
        [
            "id" => 1,
            "name" => "Zoe",
        ],
        [
            "id" => 2,
            "name" => "Aphelios",
        ],
        [
            "id" => 3,
            "name" => "Hwei",
        ],
        [
            "id" => 4,
            "name" => "Viego",
        ],
        [
            "id" => 5,
            "name" => "Jhin",
        ],
        [
            "id" => 6,
            "name" => "Riven",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getChampDetails($id)
{
    $tags = [
        1 => [
            "description" => "Zoe is a playful and mischievous champion in League of Legends, known for her ability to teleport around the battlefield and manipulate her enemies' positioning.",
            "tags" => ['Midlane', 'Mage', 'Female']
        ],
        2 => [
            "description" => "Aphelios is a complex marksman champion, wielding a variety of different weapons each with its own unique abilities. Mastering Aphelios requires deep understanding and skill.",
            "tags" => ['Botlane', 'Ranged', 'Male']
        ],
        3 => [
            "description" => "Hwei is a brooding painter who creates brilliant art in order to confront Ionia's criminals and comfort their victims. Of his imagination and the gruesome memories of his temple's massacre..",
            "tags" => ['Midlane', 'Mage', 'Male']
        ],
        4 => [
            "description" => "Viego is a relentless warrior consumed by darkness, seeking to reclaim his lost kingdom. He wields a cursed blade that drains the life force of his enemies.",
            "tags" => ['Jungle', 'Assassin', 'Male']
        ],
        5 => [
            "description" => "Jhin is a meticulous and methodical killer, obsessed with perfection in his art of death. He is a sniper who uses traps and long-range attacks to eliminate his targets.",
            "tags" => ['Botlane', 'Marksman', 'Male']
        ],
        6 => [
            "description" => "Riven is a fierce and determined warrior seeking redemption for her past sins. She wields a massive sword and uses powerful techniques to outmaneuver her foes.",
            "tags" => ['Toplane', 'Fighter', 'Female']
        ]
    ];

    return $tags[$id];
}
