/* L'Actu — data
   One object per month, newest first. Every text here is written for this site
   from published facts; none of it is copied from the newspaper, and the
   original article is always linked. See GENERATEUR.md for the shape.
*/
window.THEMES = {
  T1:{name:"Les changements dans la société française", short:"Société", subs:["la famille en voie de changement", "l'éducation", "le monde du travail"]},
  T2:{name:"La culture politique et artistique dans les pays francophones", short:"Culture", subs:["la musique", "les médias", "les festivals et les traditions"]},
  T3:{name:"L'immigration et la société multiculturelle française", short:"Immigration", subs:["l'impact positif de l'immigration", "les défis de l'immigration et de l'intégration", "l'extrême droite"]},
  T4:{name:"L'Occupation et la Résistance", short:"Occupation", subs:["la France occupée", "le régime de Vichy", "la Résistance"]}
};

window.ISSUES = [

{ id:"2026-09", label:"Septembre 2026", published:"2026-09-01",
  note:"Quatre articles ce mois-ci, un par thème. La rentrée et la Libération de Paris tombaient dans la même semaine ; le budget de l'asile et le festival d'Angoulême complètent le numéro.",
  items:[

/* ───────────────────── T1 ───────────────────── */
{
 id:"2026-09-FR-T1", theme:"T1", words:243, minutes:25,
 title:"La rentrée : onze millions et demi d'élèves, et plus un seul portable",
 standfirst:"Le 1er septembre, l'école française a rouvert ses portes avec une interdiction qui, pour la première fois, va de la maternelle au lycée.",
 source:{name:"Ministère de l'Éducation nationale", date:"25 août 2026",
         url:"https://www.education.gouv.fr/cap-sur-l-annee-scolaire-2026-2027-505438"},
 lex:[{code:"U2.1",label:"le système scolaire"},{code:"U2.7",label:"école, égalité et laïcité"}],
 text:[
  "Mardi 1er septembre 2026, onze millions six cent sept mille six cents écoliers, collégiens et lycéens ont repris le chemin de la salle de classe. Ils sont accueillis par 851 500 professeurs, répartis dans 57 700 écoles, collèges et lycées. En moyenne, une classe compte 21 élèves à l'école primaire et 25,3 au collège et au lycée.",
  "Le ministre de l'Éducation nationale, Édouard Geffray, a présenté cette année scolaire le 25 août. Il souhaite que l'institution scolaire puisse se concentrer sur trois missions : instruire, protéger et unir. Autrement dit, transmettre des savoirs, mettre les élèves à l'abri, et faire tenir ensemble une société qui se divise facilement.",
  "La mesure la plus visible concerne le téléphone. Depuis cette rentrée, le portable est interdit de la maternelle au lycée. Jusqu'ici, l'interdiction s'arrêtait à la fin du collège ; elle s'étend désormais aux lycéens, qui sont les plus nombreux à en posséder un. Le ministère parle plus largement d'un usage raisonné du numérique.",
  "Les autres priorités sont moins spectaculaires mais plus lourdes. La maîtrise du langage passe devant tout le reste : lire, écrire, comprendre. L'éducation prioritaire, qui donne davantage de moyens aux quartiers les plus pauvres, est maintenue, ainsi que l'école inclusive, qui accueille les élèves en situation de handicap dans les classes ordinaires.",
  "Le ministère justifie l'ensemble par une idée simple : l'école doit préparer les générations qui viennent à trois transitions en cours, la transition démographique, la transition numérique et la transition écologique."
 ],
 glossary:[
  ["la rentrée","the start of the school year"],
  ["un écolier / une écolière","a primary-school pupil"],
  ["un collégien / une collégienne","a lower-secondary pupil"],
  ["un lycéen / une lycéenne","a sixth-former"],
  ["la maîtrise du langage","command of language"],
  ["l'éducation prioritaire","extra funding for schools in poorer areas"],
  ["l'école inclusive","inclusive schooling (pupils with disabilities in mainstream classes)"],
  ["un usage raisonné","sensible, measured use"],
  ["mettre à l'abri","to shelter, to keep safe"]
 ],
 tasks:[
  {t:"vf", q:"La rentrée 2026 a eu lieu un lundi.", a:"F",
   why:"C'était le mardi 1er septembre."},
  {t:"qcm", q:"Combien de professeurs accueillent les élèves cette année ?",
   opts:["57 700","851 500","11 607 600"], a:1,
   why:"57 700 est le nombre d'établissements et 11 607 600 celui des élèves."},
  {t:"vf", q:"L'interdiction du téléphone portable ne concerne que le collège.", a:"F",
   why:"Elle va désormais de la maternelle au lycée ; c'est le changement de cette rentrée."},
  {t:"vf", q:"Le ministère a annoncé la suppression de l'éducation prioritaire.", a:"F",
   why:"Le texte dit qu'elle est maintenue."},
  {t:"vf", q:"Les professeurs ont fait grève le jour de la rentrée.", a:"N",
   why:"Le texte ne dit rien des grèves."},
  {t:"lacune", q:"Complétez la phrase du ministre.",
   before:"L'école doit se concentrer sur trois missions : instruire,",
   after:"et unir.", a:["protéger"], bank:["protéger","punir","choisir","surveiller"]},
  {t:"lacune", q:"Complétez avec le chiffre du texte.",
   before:"Une classe de collège ou de lycée compte en moyenne",
   after:"élèves.", a:["25,3","25.3"], bank:["21","25,3","57,7"]},
  {t:"lexique", q:"Reliez chaque mot du texte à sa traduction.",
   pairs:[["la rentrée","the start of the school year"],
          ["un lycéen","a sixth-former"],
          ["la maîtrise du langage","command of language"],
          ["l'éducation prioritaire","extra funding for poorer areas"],
          ["l'école inclusive","inclusive schooling"],
          ["un usage raisonné","measured use"]]},
  {t:"court", q:"Quelles sont les trois transitions que l'école doit préparer, d'après le ministère ?",
   a:["La transition démographique, la transition numérique et la transition écologique."],
   keys:["démographique","numérique","écologique"]},
  {t:"court", q:"Expliquez avec vos propres mots ce que veut dire « protéger » dans la bouche du ministre. Donnez un exemple tiré du texte.",
   a:["Protéger veut dire mettre les élèves à l'abri : par exemple en interdisant le téléphone portable, ou en accueillant les élèves en situation de handicap dans des classes ordinaires."],
   keys:["abri|protection|danger|sécurité","portable|téléphone|handicap|inclusive"]}
 ],
 stretch:{
  q:"« Interdire le téléphone portable jusqu'au lycée est une bonne mesure. » Qu'en pensez-vous ? Écrivez 90 à 120 mots en donnant au moins un argument pour et un argument contre.",
  model:"On peut défendre l'interdiction : le téléphone coupe l'attention, il facilite le harcèlement entre élèves et il creuse les inégalités entre ceux qui ont le dernier modèle et les autres. En classe, un élève qui consulte son écran n'écoute plus. Cependant, l'argument inverse mérite d'être entendu : à dix-sept ans, on prépare des études supérieures où le numérique est partout, et apprendre à s'en servir raisonnablement vaut mieux que de l'interdire. Une interdiction totale risque aussi d'être impossible à appliquer, ce qui affaiblit l'autorité des professeurs. Personnellement, je pense qu'une interdiction pendant les cours, assortie d'une éducation au numérique, serait plus efficace qu'une interdiction absolue."}
},

/* ───────────────────── T2 ───────────────────── */
{
 id:"2026-09-FR-T2", theme:"T2", words:236, minutes:25,
 title:"Angoulême : le cinéma francophone fait sa rentrée",
 standfirst:"La dix-neuvième édition du Festival du film francophone s'est achevée le 29 août. Le palmarès dit beaucoup de ce que le cinéma de langue française raconte en ce moment.",
 source:{name:"Ciné Alliance", date:"30 août 2026",
         url:"https://www.cinealliance.fr/187838-festival-du-film-francophone-dangouleme-2026-le-palmares-complet.html"},
 lex:[{code:"HAI.7",label:"le vocabulaire du cinéma"},{code:"HAI.8",label:"le cadrage, le montage et le son"}],
 text:[
  "Chaque fin août, Angoulême devient pour une semaine la capitale du cinéma de langue française. La dix-neuvième édition du Festival du film francophone s'est terminée le samedi 29 août 2026. Le jury était présidé par l'acteur Franck Dubosc.",
  "La plus haute récompense, le Valois de Diamant, est revenue à « Voilà, c'est fini », de Gustave Kervern. Deux prix sont allés au même film, « La Frappe » de Julien Gaspar-Oliveri : celui de la mise en scène et celui de l'acteur, pour Diego Murgia. Le Valois de l'actrice a distingué Monia Chokri dans « Si tu penses bien », de Géraldine Nakache.",
  "Le mot « francophone » n'est pas décoratif. Le Valois de la musique a récompensé « Congo Boy », de Rafiki Fariala, un cinéaste centrafricain. Le Valois du public est allé à « Les Filles d'Abraham », de Hanaël El Yousfi, et le Valois des étudiants francophones à « Ce qui nous mène à toi », de Khalil Cherti.",
  "Ce dernier prix mérite un mot. Il n'est pas décerné par des critiques mais par des étudiants venus de plusieurs pays de la francophonie. Le même film a d'ailleurs reçu le prix du scénario, ce qui arrive rarement.",
  "Un festival de cette taille ne fait pas seulement des gagnants : il fixe le programme des salles pour l'automne. Les films primés à Angoulême sortent souvent en septembre et en octobre, portés par leur palmarès."
 ],
 glossary:[
  ["un palmarès","a prize list, the roll of honour"],
  ["décerner un prix","to award a prize"],
  ["la mise en scène","directing, staging"],
  ["le scénario","the screenplay"],
  ["un cinéaste","a film-maker"],
  ["une récompense","an award"],
  ["primé(e)","prize-winning"],
  ["sortir (un film)","to be released"],
  ["la francophonie","the French-speaking world"]
 ],
 tasks:[
  {t:"vf", q:"Le festival d'Angoulême récompense des films de plusieurs pays francophones.", a:"V",
   why:"Le Valois de la musique est allé à un cinéaste centrafricain, et les étudiants viennent de plusieurs pays."},
  {t:"qcm", q:"Quel film a reçu la plus haute récompense ?",
   opts:["« La Frappe »","« Voilà, c'est fini »","« Congo Boy »"], a:1,
   why:"Le Valois de Diamant est allé à « Voilà, c'est fini », de Gustave Kervern."},
  {t:"qcm", q:"Qui présidait le jury ?",
   opts:["Franck Dubosc","Géraldine Nakache","Monia Chokri"], a:0},
  {t:"vf", q:"« La Frappe » a reçu deux prix.", a:"V",
   why:"La mise en scène et l'acteur."},
  {t:"vf", q:"Le festival existe depuis vingt-cinq ans.", a:"F",
   why:"C'était la dix-neuvième édition."},
  {t:"vf", q:"« Voilà, c'est fini » a été tourné au Québec.", a:"N",
   why:"Le texte ne dit pas où le film a été tourné."},
  {t:"lacune", q:"Complétez avec un mot du texte.",
   before:"Le Valois des étudiants francophones n'est pas décerné par des critiques mais par des",
   after:"venus de plusieurs pays.", a:["étudiants"], bank:["étudiants","journalistes","acteurs","spectateurs"]},
  {t:"lexique", q:"Reliez chaque mot du texte à sa traduction.",
   pairs:[["un palmarès","a prize list"],
          ["la mise en scène","directing"],
          ["le scénario","the screenplay"],
          ["un cinéaste","a film-maker"],
          ["primé","prize-winning"],
          ["décerner","to award"]]},
  {t:"court", q:"Pourquoi l'auteur écrit-il que le mot « francophone » n'est pas décoratif ?",
   a:["Parce que les prix récompensent réellement des films et des cinéastes venus de tout le monde francophone, et pas seulement de France : le Valois de la musique est allé à un cinéaste centrafricain."],
   keys:["pas seulement la France|hors de France|autres pays|centrafricain|Afrique","récompense|prix|palmarès"]},
  {t:"court", q:"Quel effet un prix à Angoulême a-t-il sur la carrière d'un film ? Répondez en une phrase.",
   a:["Un film primé sort souvent dans les salles en septembre ou en octobre, et son palmarès lui sert à attirer le public."],
   keys:["sortie|sortir|salles|cinémas","automne|septembre|octobre|public|attirer"]}
 ],
 stretch:{
  q:"Le Valois des étudiants francophones est décerné par des étudiants, pas par des critiques. Est-ce une bonne idée ? Écrivez 90 à 120 mots.",
  model:"L'idée a du bon. Un jury d'étudiants juge un film sans les habitudes ni les rivalités du milieu, et il représente le public que le cinéma cherche justement à retrouver, celui des moins de vingt-cinq ans. Comme les étudiants viennent de plusieurs pays francophones, leur prix dit aussi quelque chose de ce qui traverse les frontières. On peut objecter qu'ils manquent de recul : un critique a vu des milliers de films et repère ce qui est neuf. Mais un festival décerne déjà beaucoup de prix professionnels, et rien n'empêche que l'un d'eux échappe aux professionnels. Le risque est faible et le signal envoyé aux jeunes spectateurs est fort."}
},

/* ───────────────────── T3 ───────────────────── */
{
 id:"2026-09-FR-T3", theme:"T3", words:252, minutes:30,
 title:"Asile : un budget en hausse, des délais qui ne baissent pas",
 standfirst:"Le Sénat a examiné les crédits de l'immigration et de l'asile pour 2026. Les chiffres racontent une politique coûteuse et lente.",
 source:{name:"Sénat — rapport sur le projet de loi de finances pour 2026", date:"novembre 2025",
         url:"https://www.senat.fr/rap/l25-139-315/l25-139-315_mono.html"},
 lex:[{code:"U8.6",label:"la citoyenneté, la loi et les papiers"},{code:"U8.1",label:"immigration et migration"}],
 text:[
  "Chaque automne, le Parlement examine le budget de l'État ligne par ligne. Pour 2026, la mission « Immigration, asile et intégration » est dotée de 2,24 milliards d'euros d'autorisations d'engagement, soit une hausse de 25,2 % par rapport à 2025. Les crédits réellement disponibles pour payer, eux, n'augmentent que de 3,8 %.",
  "Derrière ces chiffres, il y a des demandes d'asile. La France en a enregistré 153 715 en 2024, un record, en hausse de 8 % sur un an. Sur les neuf premiers mois de 2025, le mouvement s'est légèrement inversé : 110 750 demandes, soit 4,5 % de moins qu'à la même période de l'année précédente.",
  "Le problème n'est pas seulement le nombre, c'est le temps. L'OFPRA, l'office qui instruit les dossiers, met en moyenne 161 jours pour rendre une décision, alors que l'objectif fixé est de 60 jours. Pour 2026, l'office vise 174 000 décisions et reçoit 48 postes supplémentaires.",
  "Les retours, eux, restent faibles. En 2024, la France a procédé à 12 856 retours forcés, un chiffre inférieur de 32 % à celui de 2019. Les obligations de quitter le territoire français ne sont exécutées que dans 11,4 % des cas. Le rapporteur du Sénat qualifie ces résultats d'extrêmement faibles et note que les places dans les dispositifs de retour volontaire restent largement inoccupées.",
  "Enfin, l'allocation pour demandeurs d'asile, qui permet de vivre pendant l'instruction du dossier, est budgétée à 313,4 millions d'euros, en baisse de 2 %."
 ],
 glossary:[
  ["une demande d'asile","an asylum claim"],
  ["instruire un dossier","to process a case"],
  ["un titre de séjour","a residence permit"],
  ["un retour forcé","a forced return / removal"],
  ["une obligation de quitter le territoire (OQTF)","an order to leave the country"],
  ["l'allocation pour demandeurs d'asile","the allowance paid to asylum seekers"],
  ["les crédits","the funds voted in a budget"],
  ["en baisse / en hausse","falling / rising"],
  ["un rapporteur","the MP or senator reporting on a bill"]
 ],
 tasks:[
  {t:"qcm", q:"De combien augmentent les autorisations d'engagement de la mission en 2026 ?",
   opts:["3,8 %","11,4 %","25,2 %"], a:2,
   why:"3,8 % est la hausse des crédits de paiement ; 11,4 % est le taux d'exécution des OQTF."},
  {t:"vf", q:"2024 est l'année où la France a enregistré le plus de demandes d'asile.", a:"V",
   why:"153 715 demandes, décrites comme un record."},
  {t:"vf", q:"Le nombre de demandes a continué d'augmenter en 2025.", a:"F",
   why:"Sur neuf mois, il a baissé de 4,5 %."},
  {t:"vf", q:"L'OFPRA respecte l'objectif de délai qui lui est fixé.", a:"F",
   why:"161 jours en moyenne contre un objectif de 60."},
  {t:"vf", q:"La majorité des personnes visées par une OQTF quittent effectivement la France.", a:"F",
   why:"Le taux d'exécution est de 11,4 %."},
  {t:"vf", q:"Le nombre de fonctionnaires de la police aux frontières va doubler.", a:"N",
   why:"Le texte ne parle que des 48 postes supplémentaires de l'OFPRA."},
  {t:"lacune", q:"Complétez avec le chiffre du texte.",
   before:"L'OFPRA met en moyenne",
   after:"jours pour rendre une décision.", a:["161"], bank:["60","161","174"]},
  {t:"lexique", q:"Reliez chaque mot du texte à sa traduction.",
   pairs:[["une demande d'asile","an asylum claim"],
          ["instruire un dossier","to process a case"],
          ["un retour forcé","a removal"],
          ["les crédits","budget funds"],
          ["en baisse","falling"],
          ["un rapporteur","the senator reporting on the bill"]]},
  {t:"court", q:"Le budget augmente de 25,2 % et pourtant le rapporteur est critique. Expliquez ce paradoxe en une ou deux phrases.",
   a:["L'argent engagé augmente beaucoup, mais les résultats ne suivent pas : les délais de l'OFPRA restent très supérieurs à l'objectif et très peu d'OQTF sont exécutées."],
   keys:["délai|161|lent|temps","retour|OQTF|11,4|exécut|résultat"]},
  {t:"court", q:"Pourquoi la longueur des délais de l'OFPRA coûte-t-elle de l'argent à l'État ? Aidez-vous du dernier paragraphe.",
   a:["Parce que l'allocation pour demandeurs d'asile est versée pendant toute l'instruction du dossier : plus l'instruction dure, plus elle coûte."],
   keys:["allocation|ADA|argent|verse","instruction|attente|dure|délai|pendant"]}
 ],
 stretch:{
  q:"Traduisez en anglais le troisième paragraphe du texte (« Le problème n'est pas seulement le nombre… 48 postes supplémentaires. »).",
  model:"The problem is not just the number, it is the time. OFPRA, the office that processes the applications, takes an average of 161 days to reach a decision, whereas the target it has been set is 60 days. For 2026 the office is aiming at 174,000 decisions and is being given 48 extra posts."}
},

/* ───────────────────── T4 ───────────────────── */
{
 id:"2026-09-FR-T4", theme:"T4", words:247, minutes:25,
 title:"Quatre-vingt-deux ans après : Paris commémore sa Libération",
 standfirst:"Du 23 au 25 août, la capitale a refait, place par place, le trajet de sa libération. Les cérémonies disent qui l'on choisit de se rappeler.",
 source:{name:"Ville de Paris / Sortir à Paris", date:"25 août 2026",
         url:"https://www.sortiraparis.com/en/news/in-paris/articles/318625-82-years-since-the-liberation-of-paris-the-full-programme-of-commemorations-and-ceremonies"},
 lex:[{code:"U12.1",label:"les résistants et les réseaux"},{code:"U12.4",label:"s'unir contre l'occupant"}],
 text:[
  "Paris a commémoré du 23 au 25 août 2026 le quatre-vingt-deuxième anniversaire de sa libération. Le programme n'est pas une seule cérémonie mais une série de rendez-vous, dans l'ordre où les événements se sont produits en 1944.",
  "Le dimanche 23 août, à seize heures, la Cascade du Bois de Boulogne accueille la première cérémonie. C'est là que trente-cinq jeunes résistants ont été tués les 16 et 17 août 1944, quelques jours seulement avant l'arrivée des Alliés.",
  "Le lundi 24 août, à dix-sept heures trente, on se retrouve au jardin des Combattants-de-la-Nueve, derrière l'Hôtel de Ville. La Nueve était la neuvième compagnie de la colonne Dronne, composée en grande partie de républicains espagnols qui avaient fui Franco. Ce sont leurs half-tracks, portant des noms de batailles d'Espagne, qui sont entrés les premiers dans Paris.",
  "Le mardi 25 août, la journée est chargée : l'arbre de la Libération place Saint-Michel à dix heures, la plaque des déportés à la gare de l'Est à dix heures trente, une plaque avenue de Laumière pour les FTP de la compagnie Saint-Just à onze heures. L'après-midi, place du 18-Juin-1940, on marque le lieu de la reddition allemande ; puis, porte d'Orléans, une cérémonie militaire rend hommage à la 2e division blindée devant la statue du maréchal Leclerc.",
  "La journée s'achève place de l'Hôtel-de-Ville par une prise d'armes, et le soir, en plein air, par la projection du film « Diplomatie »."
 ],
 glossary:[
  ["commémorer","to commemorate"],
  ["une cérémonie","a ceremony"],
  ["un résistant / une résistante","a member of the Resistance"],
  ["la reddition","the surrender"],
  ["une division blindée","an armoured division"],
  ["une prise d'armes","a formal military parade"],
  ["un déporté","someone deported (to the camps)"],
  ["fuir","to flee"],
  ["rendre hommage à","to pay tribute to"]
 ],
 tasks:[
  {t:"vf", q:"Les commémorations suivent l'ordre chronologique des événements de 1944.", a:"V",
   why:"Le texte le dit : « dans l'ordre où les événements se sont produits »."},
  {t:"qcm", q:"Qui composait en grande partie la Nueve ?",
   opts:["Des républicains espagnols","Des soldats américains","Des étudiants parisiens"], a:0,
   why:"C'était la neuvième compagnie de la colonne Dronne."},
  {t:"qcm", q:"Que commémore-t-on place du 18-Juin-1940 ?",
   opts:["La mort de trente-cinq résistants","La reddition allemande","Le départ des déportés"], a:1},
  {t:"vf", q:"Les trente-cinq jeunes résistants de la Cascade ont été tués après la libération de Paris.", a:"F",
   why:"Les 16 et 17 août 1944, quelques jours avant l'arrivée des Alliés."},
  {t:"vf", q:"Le film projeté le soir raconte l'histoire de la Nueve.", a:"N",
   why:"Le texte donne le titre du film mais ne dit pas de quoi il parle."},
  {t:"lacune", q:"Complétez avec un mot du texte.",
   before:"Porte d'Orléans, une cérémonie militaire rend",
   after:"à la 2e division blindée.", a:["hommage"], bank:["hommage","visite","service","honneur"]},
  {t:"lacune", q:"Complétez avec le chiffre en toutes lettres du texte.",
   before:"Paris a commémoré le",
   after:"anniversaire de sa libération.", a:["quatre-vingt-deuxième","quatre vingt deuxième","82e"],
   bank:["quatre-vingtième","quatre-vingt-deuxième","soixante-dixième"]},
  {t:"lexique", q:"Reliez chaque mot du texte à sa traduction.",
   pairs:[["commémorer","to commemorate"],
          ["un résistant","a member of the Resistance"],
          ["la reddition","the surrender"],
          ["une division blindée","an armoured division"],
          ["un déporté","someone deported to the camps"],
          ["fuir","to flee"]]},
  {t:"court", q:"Pourquoi la présence de la Nueve dans les commémorations est-elle importante ? Répondez en une ou deux phrases.",
   a:["Parce qu'elle rappelle que les premiers soldats entrés dans Paris étaient des républicains espagnols réfugiés en France : la Libération n'a pas été seulement française."],
   keys:["espagnol|Espagne|républicain","premiers|entrés|Paris|étrangers|pas seulement"]},
  {t:"court", q:"Le texte dit que les cérémonies « disent qui l'on choisit de se rappeler ». Donnez deux groupes qui sont honorés cette année.",
   a:["Les jeunes résistants tués à la Cascade, les républicains espagnols de la Nueve, les déportés partis de la gare de l'Est, les FTP de la compagnie Saint-Just et la 2e division blindée."],
   keys:["résistant|Cascade|FTP|Saint-Just","espagnol|Nueve|déporté|division blindée|Leclerc"]}
 ],
 stretch:{
  q:"En 2026, les derniers témoins directs de l'Occupation ont disparu ou presque. Comment faut-il, selon vous, transmettre cette mémoire ? Écrivez 100 à 130 mots.",
  model:"Tant qu'il restait des témoins, la mémoire tenait à une voix : quelqu'un qui avait vu, et que l'on croyait. Cette époque s'achève, et il faut donc s'appuyer sur autre chose. Les lieux, d'abord : une plaque avenue de Laumière ou un jardin portant le nom de la Nueve obligent le passant à se demander ce qui s'est produit là. Les archives ensuite, filmées et transcrites pendant qu'il était encore temps, à condition qu'elles soient utilisées en classe et non rangées. Enfin le cinéma et le roman, qui touchent un public que les cérémonies n'atteignent pas. Le risque, si l'on ne fait rien, n'est pas l'oubli complet : c'est une mémoire simplifiée, où tout le monde aurait résisté."}
}

]}

];
