const INVITE='https://discord.com/oauth2/authorize?client_id=1514506916993306744&permissions=8&integration_type=0&scope=applications.commands+bot';
const SUPPORT='https://discord.gg/46Vn9pdtPF';
const WEBSITE='https://farebot.vercel.app/';
const items={
General:{
'Basic Commands':`afk|membercount|boostcount|joinedat|serverinfo|userinfo|channelinfo|roleinfo|avatar|banner|servericon|serverbanner|profile|vote`,
'Bot Information':`invite|stats|botinfo|ping|uptime|users|documentation|website|variables|purchase`,
'List Commands':`list|list bots|list admins|list mods|list roles|list inrole|list early|list createdat|list bans|list invoice|list activedeveloper|list bughunters|list hypesquad|list pending|list channels|list users|list timeouts|list joinedat|list hasperms|list boosters|list emojis`},
'Security Modules':{
'Antinuke':`antinuke|antinuke disable|antinuke logging|antinuke autorecovery|antinuke whitelist|antinuke manage|antinuke betrayalguard|antinuke enable|antinuke whitelisted|antinuke limit|antinuke owneronly|antinuke config|antinuke wizard`,
'Mainrole':`mainrole|mainrole remove|mainrole add|mainrole show|mainrole reset`,
'Panicmode':`panicmode|panicmode enable|panicmode reset|panicmode setup|panicmode deactivate|panicmode activate|panicmode disable|panicmode show`},
Automod:{
'Automod':`automod|automod reset|automod settings|automod whitelist|automod disable|automod enable|automod wlshow|automod logging|automod manage`,
'Word Blacklist':`blword|blword reset|blword add|blword remove|blword show|blword guide`},
Moderation:{
'Basic Commands':`ban|softban|kick|mute|unmute|unban|nick|clone|nuke|hideall|unhideall|lockall|unlockall|unbanall|lock|unlock|hide|unhide|slowmode|unslowmode|channel|channel create|channel deleteafter|channel rename|channel transfer|channel delete|enlarge|steal|deleteemoji|deletesticker|snipe`,
'Role Commands':`role|role delete|role remove|role icon|role add|role bots|role colour|role taskcancel|role rename|role all|role create|role humans|rrole|rrole bots|rrole humans|rrole all`,
'Purge Commands':`clear|clear user|clear bots|clear image|clear reactions|clear contain|clear embed|clear all|clear emoji|clear files|clear mentions|purgeuser|purgebots`,
'Quarantine Commands':`quarantine|quarantine show|quarantine config|quarantine add|quarantine setup|quarantine remove|quarantine reset|unquarantine`},
'Embed System':{'Embed Commands':`embed|embed save|embed edit|embed create|embed import|embed export|embed send|embed rename|embed delete|embed show`,'Variable Command':`variables [module] [category]`},
Utility:{
'Media Commands':`media|media show|media add|media reset|media bypass|media bypass remove|media bypass add|media bypass reset|media bypass show|media remove`,
'Reaction Role':`reactionrole|reactionrole remove|reactionrole add|reactionrole format|reactionrole addmany|reactionrole maxroles|reactionrole edit|reactionrole clear|reactionrole show|reactionrole clone|reactionrole info`},
Autoresponders:{
'Auto Responders':`autoresponder|autoresponder reset|autoresponder add|autoresponder editreply|autoresponder remove|autoresponder rename|autoresponder show`,
'Auto Reactors':`autoreact|autoreact reset|autoreact rename|autoreact remove|autoreact editemojis|autoreact add|autoreact show`,
'Timer':`tstart|tpause|tresume|tend`,'Giveaways':`gcreate|gend|greroll|glist|gdelete`},
Music:{'Music Commands':`play|nowplaying|autoplay|history|queue|lavalink|join|leave|forcefix|pause|resume|volume|replay|seek|forward|rewind|loop|247|shuffle|clearqueue|remove|move|skip|skipinto|lyrics`,'Filter Commands':`filter|filter toggle|filter reset`},
'Fun Commands':{
'Fun Commands':`airkiss|angrystare|bite|bonk|brofist|cuddle|handhold|hug|kiss|lick|nom|nuzzle|pat|pinch|poke|punch|slap|smack|stare|tickle|wave|bleh|blush|celebrate|cheers|clap|confused|cool|cry|dance|drool|evillaugh|facepalm|happy|headbang|huh|laugh|love|mad|nervous|no|nosebleed|nyah|peek|pout|roll|run|sad|scared|shout|shrug|shy|sigh|sing|sip|sleep|slowclap|smile|smug|sneeze|sorry|stop|surprised|sweat|thumbsup|tired|wink|yawn|yay|yes|eightball|reverse|mock|doublestruck|emojipasta|morse|biden|pikachu|oogway|drake|pooh|sadcat|factsmeme|unforgivable|caution|opinion|gun|drip|blur|invert|greyscale|advertise|mnm|pickup|showerthought|clown|jailed|wanted|pet|alert|supreme|whowouldwin|nokia|uncover|jokeoverhead|huerotate|quote|couldread|caption|colorify|cat|joke|fact|truth|dare|hack|token`,
'Sticky Message':`sticky|sticky show|sticky channel|sticky channel remove|sticky channel add|sticky remove|sticky bump|sticky reset|sticky add`},
Tickets:{'Ticket Commands':`ticket|ticket transcript|ticket delete|ticket add|ticket greetmsg|ticket maxtickets|ticket remove|ticket autotranscript|ticket category|ticket logging|ticket rename|ticket reopen|ticket list|ticket support|ticket support reset|ticket support remove|ticket support show|ticket support add|ticket panel|ticket type|ticket type create|ticket type delete|ticket type edit|ticket close`},
Logging:{'Logging Commands':`logging|logging setup|logging setup channel|logging setup auto|logging setup clear|logging disable|logging enable|logging wizard|logging config|logging remove|logging ignore|logging ignore remove|logging ignore add|logging ignore voice|logging ignore embed`},
'Voice Commands':{'Voice Commands':`voice|voice unlock|voice mute|voice unprivate|voice undeafenall|voice deafen|voice muteall|voice moveall|voice pullall|voice private|voice deafenall|voice move|voice unmute|voice kick|voice lock|voice kickall|voice unmuteall|voice pull|voice undeafen`,'VC Roles':`vcrole|vcrole set|vcrole disable|vcrole enable|vcrole show|vcrole reset`},
'Bot Settings':{'Profile':`profile|bio|bio clear|bio set|badge|badge list|badge remove|badge add`,'Branding':`customize|customize bio|customize avatar|customize reset|customize banner|customize nick`,'Prefix':`prefix|prefix show|prefix set|prefix add|prefix reset|prefix remove`},
'Invite Tracker':{'Invite Commands':`invites|invite|inviter|invites leaderboard|invites info`,'Management':`invites reset|invites add|invites remove|invites fake`,'Tracking':`invites joins|invites leaves`,'Configuration':`invites setup|invites config`},
AI:{'AI':`ai`},Premium:{'Premium':`premium`}
};
function flatCommands(){return Object.values(items).flatMap(groups=>Object.values(groups).flatMap(v=>v.split('|')))}
