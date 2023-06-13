INSERT INTO
    drivers(name, team, nationality, description, image, link)
VALUES
    (
        'Lewis Hamilton',
        (SELECT teams.id FROM teams WHERE teams.name = 'Mercedes'),
        'British',
        'Lewis Hamilton is a British racing driver who has established himself as one of the all-time greats in Formula 1. With his exceptional talent, Hamilton has won multiple World Championships and holds numerous records. Known for his smooth driving style and fierce competitiveness, he has been a dominant force for Mercedes, showcasing his speed and racecraft on track.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/lewis-hamilton.html'
    ),
    (
        'Valtteri Bottas',
        (SELECT teams.id FROM teams WHERE teams.name = 'Alfa Romeo Racing'),
        'Finnish',
        'Valtteri Bottas is a Finnish driver who joined Mercedes in 2017 as Lewis Hamiltons teammate. Bottas has shown impressive speed and consistency, securing wins and supporting the teams Constructors Championship successes. With his cool demeanor and strong qualifying performances, he has firmly established himself as a competitive force in Formula 1.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/valtteri-bottas.html'
    ),
    (
        'Max Verstappen',
        (SELECT teams.id FROM teams WHERE teams.name = 'Red Bull Racing'),
        'Dutch',
        'Max Verstappen burst onto the Formula 1 scene as the youngest driver ever to start a race. As a Dutch driver for Red Bull Racing, Verstappen has showcased his exceptional skill and aggressive racing style. With multiple wins and podium finishes, he has established himself as one of the sports most exciting talents, challenging for victories and going head-to-head with the best in the field.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/max-verstappen.html'
    ),
    (
        'Sergio Perez',
        (SELECT teams.id FROM teams WHERE teams.name = 'Red Bull Racing'),
        'Mexican',
        'Sergio Perez, hailing from Mexico, has demonstrated his consistency and racecraft throughout his Formula 1 career. Known for his strong tire management and ability to capitalize on race opportunities, Perez has claimed multiple podium finishes. He joined Red Bull Racing in 2021, aiming to provide crucial support to Max Verstappen and contribute to the teams title aspirations.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/sergio-perez.html'
    ),
    (
        'Lando Norris',
        (SELECT teams.id FROM teams WHERE teams.name = 'McLaren'),
        'British',
        'Lando Norris, a British driver, made his Formula 1 debut with McLaren in 2019. He has quickly gained recognition for his raw talent and impressive performances on track. With his speed, race intelligence, and engaging personality, Norris has become a fan favorite in the sport, earning podium finishes and showcasing his potential for future success.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/lando-norris.html'
    ),
    (
        'Charles Leclerc',
        (SELECT teams.id FROM teams WHERE teams.name = 'Ferrari'),
        'Monegasque',
        'Charles Leclerc, a Monegasque driver, made his mark in Formula 1 with Sauber (now Alfa Romeo Racing) before joining Ferrari in 2019. Leclerc quickly established himself as a rising star, demonstrating his speed, consistency, and fearless driving style. He has secured wins and pole positions, showcasing his potential to lead Ferraris charge and become a future World Champion.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/charles-leclerc.html'
    ),
    (
        'Carlos Sainz Jr.',
        (SELECT teams.id FROM teams WHERE teams.name = 'Ferrari'),
        'Spanish',
        'Carlos Sainz Jr., a Spanish driver, has shown great promise throughout his Formula 1 career. Starting with Toro Rosso (now AlphaTauri), Sainz showcased his skill and determination, earning a reputation as a consistent points scorer. He moved to McLaren in 2019, where he continued to impress with his speed, racecraft, and ability to deliver strong performances.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/carlos-sainz.html'
    ),
    (
        'Fernando Alonso',
        (SELECT teams.id FROM teams WHERE teams.name = 'Aston Martin'),
        'Spanish',
        'Fernando Alonso, a Spanish racing legend, is known for his two World Championships and remarkable racing talent. After a brief hiatus from Formula 1, Alonso made a highly anticipated return in 2021 with Alpine. With his experience, strategic thinking, and relentless drive, Alonso aims to contribute to the teams success and showcase his enduring competitiveness.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/fernando-alonso.html'
    ),
    (
        'Esteban Ocon',
        (SELECT teams.id FROM teams WHERE teams.name = 'Alpine'),
        'French',
        'Esteban Ocon, a French driver, has steadily progressed in Formula 1, showcasing his potential and skill. Ocon raced for Force India (now Aston Martin) before joining Renault (now Alpine). With his consistent performances and ability to adapt to different race conditions, Ocon aims to establish himself as a consistent point scorer and support Alpines ambitions.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/esteban-ocon.html'
    ),
    (
        'Pierre Gasly',
        (SELECT teams.id FROM teams WHERE teams.name = 'Alpine'),
        'French',
        'Pierre Gasly, a French driver, made his mark in Formula 1 with Toro Rosso (now AlphaTauri) before briefly joining Red Bull Racing. Gasly then returned to AlphaTauri, where he showcased his talent and secured a remarkable maiden victory at the 2020 Italian Grand Prix. With his tenacity and speed, Gasly aims to continue delivering strong performances on track.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/pierre-gasly.html'
    ),
    (
        'Yuki Tsunoda',
        (SELECT teams.id FROM teams WHERE teams.name = 'AlphaTauri'),
        'Japanese',
        'Yuki Tsunoda, a Japanese rookie, made his Formula 1 debut with AlphaTauri in 2021. Known for his aggressive driving style and impressive speed, Tsunoda quickly gained attention and became the first Japanese driver to score points on debut since 1995. With his raw talent and determination, Tsunoda aims to make his mark in the sport.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/yuki-tsunoda.html'
    ),
    (
        'Lance Stroll',
        (SELECT teams.id FROM teams WHERE teams.name = 'Aston Martin'),
        'Canadian',
        'Lance Stroll, a Canadian driver, entered Formula 1 with Williams before joining Racing Point (now Aston Martin). Stroll has showcased his talent with podium finishes and strong performances in challenging conditions. With his speed and determination, Stroll aims to establish himself as a consistent point scorer and contribute to Aston Martins progress.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/lance-stroll.html'
    ),
    (
        'George Russell',
        (SELECT teams.id FROM teams WHERE teams.name = 'Mercedes'),
        'British',
        'George Russell, a British driver, made his Formula 1 debut with Williams in 2019. As a Mercedes junior driver, Russell has demonstrated his exceptional skill and potential for future success. Despite his early career struggles with a backmarker team, Russell has showcased his talent during stand-in appearances for Mercedes, raising his profile as a rising star in the sport.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/george-russell.html'
    ),
    (
        'Nico Hulkenberg',
        (SELECT teams.id FROM teams WHERE teams.name = 'Haas'),
        'German',
        'Hes the Superhero with the talent to become a racing superstar, if only he could get to flex his muscles with a top team. F1s Hulk has shown incredible strength and stamina as a midfield marauder for Williams, Force India, Sauber, Renault, Racing Point and Aston Martin during a career spanning back to 2010  and now he is back on the grid with Haas. In that rookie season, Hulkenberg mastered changing track conditions to take a brilliant pole position in Brazil, showing he had brains as well as brawn. Since then his ability to consistently hoover up the points has made him a highly valued team player. In 2015, his reputation grew once more when, on a weekend away from his day job, he won the classic Le Mans 24 Hours race for Porsche at the first time of asking. Hulkenbergs off-track alter ego is down to earth, hes the sort of driver who holds his own umbrella when its raining on the way to the grid, with a cheeky sense of humour. When he reached the unwanted record of most race starts without a podium finish he laughed it off as the start of the Hulkenberg era. Thankfully, even after being dropped by Renault at the end of 2019, the popular Germans era continued with some stand-in (and stand-out) drives in 2020 and 2022, and given the opportunity, the Hulk now has another chance to set the record straight.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/nico-hulkenberg.html'
    ),
    (
        'Oscar Piastri',
        (SELECT teams.id FROM teams WHERE teams.name = 'McLaren'),
        'Australian',
        'Born in Melbourne, just a stones throw away from the Australian Grand Prix venue, a young Oscar Piastris dreams of one day racing in Formula 1 were ignited by the sports star drivers roaring around his local streets, otherwise known as Albert Park. But it would take huge commitment and sacrifice to turn that dream into a reality, with a move to Europe, made by the likes of fellow countrymen Mark Webber and Daniel Ricciardo before him, the only way to go up against the best and catch the attention of the sports decision makers. Using success on the Australian karting scene as a springboard, Piastri continued to learn the craft in championships across Europe, before getting his first taste of single seater competition as a 15 year old, two podium finishes in F4 UAE a sign of things to come. From there, success flowed. British F4 runner up. Formula Renault champion. F3 champion. F2 champion (by more than 50 points). Piastri did not simply climb the junior single seater ladder, he charged up it to knock loudly on the F1 door. So impressive was Piastri that two F1 teams squabbled over his services for 2023, adding a new dimension to the driver market and so called ‘silly season. After a meeting of the Contract Recognition Board, it was confirmed that it was McLaren, and not long time backers Alpine, that had the right to Piastris services, and with whom the 21 year old is set to realise his F1 dream.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/oscar-piastri.html'
    ),
    (
        'Zhou Guanyu',
        (SELECT teams.id FROM teams WHERE teams.name = 'Alfa Romeo Racing'),
        'Chinese',
        'China has never boasted a Grand Prix starter among its citizens, but Zhou Guanyu is the driver charged with changing that state of affairs, after receiving the call up to make his F1 debut for Alfa Romeo in 2022. The Shanghai born racer attended his home citys inaugural Grand Prix in 2004 at the age of five, cheering on his hero Fernando Alonso. But having caught the racing bug, the Chinese driver then set himself the ambitious goal of becoming his countrys first ever F1 racer, achieving a feat that Ma Qinghua, the only other Chinese driver to take part in a Formula 1 weekend, never managed. Showing boldness and dedication, Zhou put his plan into action by moving to England with his family aged just 12 to pursue his motorsport ambitions. A second place finish in the 2015 Italian F4 championship proved Zhou was possessed of the right stuff, a fact already noted by Ferrari, whod signed him to their driver academy a year earlier. A move to Renaults academy for 2019 coincided with his debut in Formula 2, with Zhou building his confidence in the series via multiple wins and pole positions across three seasons, leading to him challenging for the drivers title in 2021. That was enough to convince Alfa Romeo Team Principal Fred Vasseur to put his faith in Zhou for 2022 and field him alongside ex Mercedes racer Valtteri Bottas, allowing Zhou to achieve his dream of racing in F1, and even to see how he fares against his own childhood hero, Fernando Alonso.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/guanyu-zhou.html'
    ),
    (
        'Kevin Magnussen',
        (SELECT teams.id FROM teams WHERE teams.name = 'Haas'),
        'Danish',
        'Call him a lone ranger or a maverick, but Magnussen is back in Formula 1 for one reason only, to race. He may be a second-generation F1 driver, following his father, Jan, onto the grid, but Magnussens idols are from the golden era of Grand Prix racing when the likes of Juan Manuel Fangio and Stirling Moss risked it all for the love of the sport. The Roskilde racers own prowess was proven on debut for McLaren, who guided him through the junior ranks, when he cruised into the top-three at the 2014 Australian Grand Prix, becoming the first Dane to claim a podium in F1. Other champagne moments were more difficult to find, as he left McLaren behind for a season with Renault, before settling in for four among kindred spirits at Haas. And after a year away in the States, racing Indy and sportscars among other things, he returned to the US team in 2022, securing their first-ever pole position at the Brazilian Grand Prix. His meaty manoeuvres and elbows-out approach have earned him a bad-boy reputation on track, something that still leaves him baffled. Out of the car Magnussen is laidback and affable. After all he has his dream job, and he is only here to race.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/kevin-magnussen.html'
    ),
    (
        'Alexander Albon',
        (SELECT teams.id FROM teams WHERE teams.name = 'Williams'),
        'Thai',
        'Born in London but racing under the flag of Thailand, Alexander Albons first word was in fact Italian. That word was Ferrari, though it was with another Italian team that he got his big F1 break. Idolising Michael Schumacher and dreaming of one day racing in Formula 1, the junior Albon was pipped to the 2016 GP3 title by a certain Charles Leclerc. He then left his great friendship with George Russell trackside as he took the 2018 Formula 2 title fight down to the wire. Graduating to the F1 big league along with yet another contemporary, Lando Norris, in 2019, Albon did his talking on track with Toro Rosso in the opening races, earning a mid season promotion to Red Bull Racing. A stylish over taker with a championship mentality, Albon was unfazed by partnering Max Verstappen for the second half of his rookie season, taking top six finishes in eight of his nine 2019 races with Red Bull. Staying in touch with the future champion proved tougher in 2020 and Red Bull dropped him from their race line up. Crucially, though, Albon was retained as test and reserve driver, keeping him very much on team bosses radar, leading to his 2022 return to the grid with Williams. Laidback and cheerful with a cheeky grin, the Thai racer is popular among his peers, not always easy in motorsports cauldron of competition, but you dont succeed in Formula 1 by being popular. Albons challenge now is a big one, to make the most of a rare second F1 opportunity.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/alexander-albon.html'
    ),
    (
        'Nick De Vries',
        (SELECT teams.id FROM teams WHERE teams.name = 'AlphaTauri'),
        'Dutch',
        'Nyck de Vries had to wait until he was 27 years old for a shot at racing in F1, but it was an opportunity the Dutchman grabbed with both hands to become one of the hottest options on the driver market and ultimately land a full time deal with AlphaTauri. Well versed with F1 machinery thanks to his Mercedes reserve role, which included several FP1 runs for the works and supplier teams in 2022 spec cars, De Vries slotted in seamlessly when Williams unexpectedly called him up to replace the unwell Alex Albon at the 2022 Italian Grand Prix. Embracing the pressure of the moment, De Vries out qualified and out raced regular driver Nicholas Latifi to take the chequered flag in a highly impressive ninth place, adding two valuable points to Williams tally and landing plenty of praise. The performance cemented the views of many in the F1 paddock, including Toto Wolff, who saw De Vries lift the Formula E title with Mercedes in the 2020 21 season, adding to a trophy cabinet that also includes F2 and Formula Renault titles. After De Vries phone stopped buzzing post Monza, it was AlphaTauri who won out in the battle to secure his services, Red Bull advisor Helmut Marko spending two days chatting and dining with De Vries in Austria on the suggestion of fellow countryman Max Verstappen. An older F1 rookie than many before him, De Vries will be looking to combine the extra experience he has gained over the years with his unquestionable pace and ensure that the sport becomes home for the peak phase of his motor racing career.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NYCDEV01_Nyck_De%20Vries/nycdev01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/nyck-de-vries.html'
    ),
    (
        'Logan Sargeant',
        (SELECT teams.id FROM teams WHERE teams.name = 'Williams'),
        'American',
        'Logan Sargeant becomes F1s first American driver in almost eight years as he takes to the grid for the 2023 season, giving the country a home favourite to cheer once more. A prolific title winner in karting, championship glory eluded Sargeant after he made the transition to single seater racing, but pole positions and race victories in almost every category he contested underlined his raw speed and potential. Indeed, finishing runner up in F4 UAE, third in British F4 and third in F3 (having also made the podium at the prestigious Macau Grand Prix) showed he could be there or thereabouts in a variety of championships, with plenty of potential still to be untapped.  It also convinced Williams to add the youngster to their books as he reached F2, where more race wins and another top three classification in 2022 secured the Super Licence points required to complete the journey and graduate to F1 with the Grove team for 2023. Not since Alexander Rossis quintet of appearances with backmarkers Manor at the tail end of the 2015 season has an American graced the F1 grid, and Sargeant is looking forward to changing that across his first season. And with three races to be held in the US in 2023, trips to Miami, Austin and Las Vegas all planned, Americas latest F1 star will be spurred on by plenty of home support during his rookie campaign.',
        'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png.transform/2col/image.png',
        'https://www.formula1.com/en/drivers/logan-sargeant.html'
    );