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
            "img" => "img/zoe.jpg"
        ],
        [
            "id" => 2,
            "name" => "Aphelios",
            "img" => "img/aphelios.jpg"
        ],
        [
            "id" => 3,
            "name" => "Hwei",
            "img" => "img/hwei.jpg"
        ],
        [
            "id" => 4,
            "name" => "Viego",
            "img" => "img/viego.jpg"
        ],
        [
            "id" => 5,
            "name" => "Jhin",
            "img" => "img/jhin.jpg"
        ],
        [
            "id" => 6,
            "name" => "Riven",
            "img" => "img/riven.jpg"
        ],
        [
            "id" => 7,
            "name" => "Seraphine",
            "img" => "img/seraphine.jpg"
        ],
        [
            "id" => 8,
            "name" => "Yone",
            "img" => "img/yone.jpg"
        ],
        [
            "id" => 9,
            "name" => "Samira",
            "img" => "img/samira.jpg"
        ],
        [
            "id" => 10,
            "name" => "Lillia",
            "img" => "img/lillia.jpg"
        ],
        [
            "id" => 11,
            "name" => "Sett",
            "img" => "img/sett.jpg"
        ],
        [
            "id" => 12,
            "name" => "Fiora",
            "img" => "img/fiora.jpg"
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
        ],
        7 => [
            "description" => "Seraphine is a popstar from Piltover, using her music to connect with people and spread joy. She harnesses the power of her voice and magical abilities to enchant and inspire her audience.",
            "tags" => ['Botlane', 'Support', 'Female']
        ],
        8 => [
            "description" => "Yone is a former student of the legendary swordsman Yasuo, who fell to darkness but later redeemed himself. He wields dual swords with deadly precision, seeking to atone for his past.",
            "tags" => ['Toplane', 'Assassin', 'Male']
        ],
        9 => [
            "description" => "Samira is a daring and relentless warrior, known for her unmatched skill with a blade and her love of danger. She thrives in chaotic battles, chaining together stylish combos to outplay her opponents.",
            "tags" => ['Botlane', 'Marksman', 'Female']
        ],
        10 => [
            "description" => "Lillia is a mystical creature who roams through forests, spreading dreams and inspiring wonder. She uses her magical abilities to control the battlefield, lulling her enemies into a deep sleep before delivering a devastating blow.",
            "tags" => ['Jungle', 'Mage', 'Female']
        ],
        11 => [
            "description" => "Sett is a powerful and imposing fighter, reigning as the undisputed king of the streets. He uses his incredible strength and resilience to dominate his foes, crushing anyone who dares to challenge him.",
            "tags" => ['Toplane', 'Fighter', 'Male']
        ],
        12 => [
            "description" => "Fiora is a duelist of unmatched skill, seeking to prove herself as the greatest swordswoman in all of Valoran. She relies on speed and precision to outmaneuver her opponents, striking them down with lethal accuracy.",
            "tags" => ['Toplane', 'Fighter', 'Female']
        ]
    ];

    return $tags[$id];
}

