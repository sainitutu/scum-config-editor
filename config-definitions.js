// SCUM 伺服器設定項目定義 (新版格式)
const CONFIG_DEFINITIONS = {
    // [General] 基本設定
    'scum.ServerName': {
        description: '伺服器名稱 - 顯示在伺服器列表中的名稱',
        example: 'scum.ServerName=我的SCUM伺服器',
        type: 'string',
        category: '基本設定'
    },
    'scum.ServerDescription': {
        description: '伺服器描述 - 伺服器的詳細描述',
        example: 'scum.ServerDescription=歡迎來到我的伺服器',
        type: 'string',
        category: '基本設定'
    },
    'scum.ServerPassword': {
        description: '伺服器密碼 - 設定後玩家需要密碼才能加入',
        example: 'scum.ServerPassword=mypassword123',
        type: 'string',
        category: '基本設定'
    },
    'scum.MaxPlayers': {
        description: '最大玩家數量 - 伺服器可容納的最大玩家人數',
        example: 'scum.MaxPlayers=64',
        type: 'number',
        category: '基本設定'
    },
    'scum.ServerBannerUrl': {
        description: '伺服器橫幅網址 - 顯示在伺服器資訊中的圖片網址',
        example: 'scum.ServerBannerUrl=https://example.com/banner.jpg',
        type: 'string',
        category: '基本設定'
    },
    'scum.ServerPlaystyle': {
        description: '伺服器遊戲風格 - PVE或PVP模式',
        example: 'scum.ServerPlaystyle=PVE',
        type: 'string',
        category: '基本設定'
    },
    'scum.WelcomeMessage': {
        description: '歡迎訊息 - 玩家加入時顯示的歡迎訊息',
        example: 'scum.WelcomeMessage=歡迎來到我們的SCUM伺服器',
        type: 'string',
        category: '基本設定'
    },
    'scum.MessageOfTheDay': {
        description: '每日訊息 - 定期顯示給玩家的訊息',
        example: 'scum.MessageOfTheDay=這是今日訊息',
        type: 'string',
        category: '基本設定'
    },
    'scum.MessageOfTheDayCooldown': {
        description: '每日訊息冷卻時間 - 訊息顯示間隔（分鐘）',
        example: 'scum.MessageOfTheDayCooldown=10.000000',
        type: 'float',
        category: '基本設定'
    },
    'scum.MaxPing': {
        description: '最大延遲 - 允許的最大網路延遲（毫秒）',
        example: 'scum.MaxPing=200.000000',
        type: 'float',
        category: '網路設定'
    },
    'scum.MinServerTickRate': {
        description: '最小伺服器刷新率 - 伺服器最小刷新頻率',
        example: 'scum.MinServerTickRate=5',
        type: 'number',
        category: '網路設定'
    },
    'scum.MaxServerTickRate': {
        description: '最大伺服器刷新率 - 伺服器最大刷新頻率',
        example: 'scum.MaxServerTickRate=30',
        type: 'number',
        category: '網路設定'
    },
    'scum.MasterServerUpdateSendInterval': {
        description: '主伺服器更新間隔 - 向 SCUM 主伺服器上報狀態的間隔秒數',
        example: 'scum.MasterServerUpdateSendInterval=60.000000',
        type: 'float',
        category: '網路設定'
    },
    'scum.MasterServerIsLocalTest': {
        description: '主伺服器本機測試 - 若設為 1，伺服器不會公開於列表，僅供測試用途 (0=否, 1=是)',
        example: 'scum.MasterServerIsLocalTest=0',
        type: 'number',
        category: '網路設定'
    },

    // 登出設定
    'scum.LogoutTimer': {
        description: '登出計時器 - 正常登出所需時間（秒）',
        example: 'scum.LogoutTimer=60.000000',
        type: 'float',
        category: '玩家設定'
    },
    'scum.LogoutTimerWhileCaptured': {
        description: '被俘虜時登出計時器 - 被俘虜狀態下登出所需時間（秒）',
        example: 'scum.LogoutTimerWhileCaptured=120.000000',
        type: 'float',
        category: '玩家設定'
    },
    'scum.LogoutTimerInBunker': {
        description: '地堡內登出計時器 - 在地堡內登出所需時間（秒）',
        example: 'scum.LogoutTimerInBunker=30000.000000',
        type: 'float',
        category: '玩家設定'
    },
    'scum.DeleteInactiveUsers': {
        description: '刪除不活躍玩家 - 長期未登入的玩家將被刪除 (0=否, 1=是)',
        example: 'scum.DeleteInactiveUsers=0',
        type: 'number',
        category: '玩家設定'
    },
    'scum.DaysSinceLastLoginToBecomeInactive': {
        description: '判定不活躍天數 - 幾天未登入視為不活躍（配合上面設定）',
        example: 'scum.DaysSinceLastLoginToBecomeInactive=30',
        type: 'number',
        category: '玩家設定'
    },
    'scum.DeleteBannedUsers': {
        description: '刪除被封鎖帳戶 - 是否移除已被封鎖的帳戶資料 (0=否, 1=是)',
        example: 'scum.DeleteBannedUsers=0',
        type: 'number',
        category: '玩家設定'
    },

    // 遊戲功能開關
    'scum.AllowFirstPerson': {
        description: '允許第一人稱視角 - 是否允許使用第一人稱視角 (0=否, 1=是)',
        example: 'scum.AllowFirstPerson=1',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.AllowThirdPerson': {
        description: '允許第三人稱視角 - 是否允許使用第三人稱視角 (0=否, 1=是)',
        example: 'scum.AllowThirdPerson=1',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.AllowCrosshair': {
        description: '允許準星 - 是否顯示瞄準準星 (0=否, 1=是)',
        example: 'scum.AllowCrosshair=1',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.AllowVoting': {
        description: '允許投票 - 是否允許玩家投票功能 (0=否, 1=是)',
        example: 'scum.AllowVoting=1',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.AllowMapScreen': {
        description: '允許地圖畫面 - 是否允許查看地圖 (0=否, 1=是)',
        example: 'scum.AllowMapScreen=1',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.AllowKillClaiming': {
        description: '允許擊殺宣告 - 是否允許擊殺宣告功能 (0=否, 1=是)',
        example: 'scum.AllowKillClaiming=1',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.AllowComa': {
        description: '允許昏迷狀態 - 是否允許昏迷機制 (0=否, 1=是)',
        example: 'scum.AllowComa=1',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.AllowMinesAndTraps': {
        description: '允許地雷和陷阱 - 是否允許使用地雷和陷阱 (0=否, 1=是)',
        example: 'scum.AllowMinesAndTraps=1',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.AllowSkillGainInSafeZones': {
        description: '允許在安全區練技能 - 是否允許玩家在安全區域獲得技能經驗 (0=否, 1=是)',
        example: 'scum.AllowSkillGainInSafeZones=0',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.AllowEvents': {
        description: '允許事件功能 - 是否啟用遊戲內事件系統 (0=否, 1=是)',
        example: 'scum.AllowEvents=1',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.RustyLocksLogging': {
        description: '鏽鎖紀錄 - 啟用時，紀錄誰嘗試或破壞帶有「生鏽鎖」的鎖定物件 (0=否, 1=是)',
        example: 'scum.RustyLocksLogging=1',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.HideKillNotification': {
        description: '隱藏擊殺通知 - 若為 1，畫面右上角不顯示擊殺玩家的通知（適合 RP） (0=否, 1=是)',
        example: 'scum.HideKillNotification=0',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.DisableTimedGifts': {
        description: '關閉定時贈禮 - 關閉系統定時贈送獎勵的功能，例如每日登入獎 (0=否, 1=是)',
        example: 'scum.DisableTimedGifts=0',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.UseMapBaseBuildingRestriction': {
        description: '使用地圖限制建造區域 - 啟用後，只有地圖允許的區域才能進行基地建造 (0=否, 1=是)',
        example: 'scum.UseMapBaseBuildingRestriction=0',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.DisableBaseBuilding': {
        description: '禁用基地建造 - 完全禁止玩家建造基地（牆壁、門、旗幟等） (0=否, 1=是)',
        example: 'scum.DisableBaseBuilding=0',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.VotingDuration': {
        description: '投票持續時間 - 單次投票持續幾秒（例如踢人或改天氣的投票）',
        example: 'scum.VotingDuration=60.000000',
        type: 'float',
        category: '遊戲設定'
    },
    'scum.PlayerMinimalVotingInterest': {
        description: '投票最低參與率 - 成功投票所需最低參與比例（0.5 表示 50% 玩家有參與）',
        example: 'scum.PlayerMinimalVotingInterest=0.500000',
        type: 'float',
        category: '遊戲設定'
    },
    'scum.PlayerPositiveVotePercentage': {
        description: '投票通過比率 - 成功所需贊成比率（0.5 表示過半即可通過）',
        example: 'scum.PlayerPositiveVotePercentage=0.500000',
        type: 'float',
        category: '遊戲設定'
    },
    'scum.LogSuicides': {
        description: '紀錄玩家自殺 - 啟用時，紀錄玩家使用 /suicide 指令的行為 (0=否, 1=是)',
        example: 'scum.LogSuicides=1',
        type: 'number',
        category: '遊戲設定'
    },
    'scum.EnableSpawnOnGround': {
        description: '地面重生 - 玩家是否能直接重生在地面（無需避難所） (0=否, 1=是)',
        example: 'scum.EnableSpawnOnGround=0',
        type: 'number',
        category: '遊戲設定'
    },

    // 聊天設定
    'scum.AllowGlobalChat': {
        description: '允許全域聊天 - 是否允許全域聊天頻道 (0=否, 1=是)',
        example: 'scum.AllowGlobalChat=1',
        type: 'number',
        category: '聊天設定'
    },
    'scum.AllowLocalChat': {
        description: '允許本地聊天 - 是否允許本地聊天頻道 (0=否, 1=是)',
        example: 'scum.AllowLocalChat=1',
        type: 'number',
        category: '聊天設定'
    },
    'scum.AllowSquadChat': {
        description: '允許小隊聊天 - 是否允許小隊聊天頻道 (0=否, 1=是)',
        example: 'scum.AllowSquadChat=1',
        type: 'number',
        category: '聊天設定'
    },
    'scum.AllowAdminChat': {
        description: '允許管理員聊天 - 是否允許管理員聊天頻道 (0=否, 1=是)',
        example: 'scum.AllowAdminChat=1',
        type: 'number',
        category: '聊天設定'
    },
    'scum.LimitGlobalChat': {
        description: '限制全域聊天 - 是否限制全域聊天使用 (0=否, 1=是)',
        example: 'scum.LimitGlobalChat=0',
        type: 'number',
        category: '聊天設定'
    },

    // [World] 世界設定
    'scum.StartTimeOfDay': {
        description: '開始時間 - 伺服器啟動時的遊戲時間',
        example: 'scum.StartTimeOfDay=08:00:00',
        type: 'string',
        category: '世界設定'
    },
    'scum.TimeOfDaySpeed': {
        description: '時間流逝速度 - 遊戲時間相對於現實時間的倍數',
        example: 'scum.TimeOfDaySpeed=3.840000',
        type: 'float',
        category: '世界設定'
    },
    'scum.NighttimeDarkness': {
        description: '夜晚黑暗程度 - 夜晚的黑暗程度 (0.0-1.0)',
        example: 'scum.NighttimeDarkness=0.100000',
        type: 'float',
        category: '世界設定'
    },
    'scum.SunriseTime': {
        description: '日出時間 - 遊戲中的日出時間',
        example: 'scum.SunriseTime=06:00:00',
        type: 'string',
        category: '世界設定'
    },
    'scum.SunsetTime': {
        description: '日落時間 - 遊戲中的日落時間',
        example: 'scum.SunsetTime=21:00:00',
        type: 'string',
        category: '世界設定'
    },

    // 生物設定
    'scum.MaxAllowedBirds': {
        description: '最大鳥類數量 - 地圖上同時存在的最大鳥類數量',
        example: 'scum.MaxAllowedBirds=15',
        type: 'number',
        category: '生物設定'
    },
    'scum.MaxAllowedCharacters': {
        description: '最大角色數量 - 地圖上同時存在的最大NPC數量 (-1=無限制)',
        example: 'scum.MaxAllowedCharacters=-1',
        type: 'number',
        category: '生物設定'
    },
    'scum.MaxAllowedPuppets': {
        description: '最大殭屍數量 - 地圖上同時存在的最大殭屍數量 (-1=無限制)',
        example: 'scum.MaxAllowedPuppets=-1',
        type: 'number',
        category: '生物設定'
    },
    'scum.MaxAllowedAnimals': {
        description: '最大動物數量 - 地圖上同時存在的最大動物數量 (-1=無限制)',
        example: 'scum.MaxAllowedAnimals=-1',
        type: 'number',
        category: '生物設定'
    },
    'scum.MaxAllowedDrones': {
        description: '最大無人機數量 - 世界中可同時生成的 drone（無人機）上限',
        example: 'scum.MaxAllowedDrones=10',
        type: 'number',
        category: '生物設定'
    },
    'scum.DisableSentrySpawning': {
        description: '禁用哨塔生成 - 是否禁用自動哨塔（Sentry）生成 (0=否, 1=是)',
        example: 'scum.DisableSentrySpawning=0',
        type: 'number',
        category: '生物設定'
    },
    'scum.EnableSentryRespawning': {
        description: '哨塔重生開關 - 若設定為 1，被摧毀的哨塔會在一定時間後重生 (0=否, 1=是)',
        example: 'scum.EnableSentryRespawning=1',
        type: 'number',
        category: '生物設定'
    },
    'scum.DisableSuicidePuppetSpawning': {
        description: '禁用自殺傀儡生成 - 是否禁用那些會自爆的機器人敵人 (0=否, 1=是)',
        example: 'scum.DisableSuicidePuppetSpawning=0',
        type: 'number',
        category: '生物設定'
    },
    'scum.PuppetsCanOpenDoors': {
        description: '傀儡開門開關 - 控制傀儡 NPC 是否可以自動開門 (0=否, 1=是)',
        example: 'scum.PuppetsCanOpenDoors=1',
        type: 'number',
        category: '生物設定'
    },
    'scum.PuppetsCanVaultWindows': {
        description: '傀儡跳窗開關 - 控制傀儡是否可以翻窗進入建築 (0=否, 1=是)',
        example: 'scum.PuppetsCanVaultWindows=1',
        type: 'number',
        category: '生物設定'
    },
    'scum.PuppetHealthMultiplier': {
        description: '傀儡的血量倍率 - 控制傀儡的整體生命值調整比例',
        example: 'scum.PuppetHealthMultiplier=1.000000',
        type: 'float',
        category: '生物設定'
    },

    // 動物血量設定
    'scum.BoarMaxHealthMultiplier': {
        description: '野豬血量倍率 - 控制野豬最大血量倍率',
        example: 'scum.BoarMaxHealthMultiplier=1.000000',
        type: 'float',
        category: '生物設定'
    },
    'scum.ChickenMaxHealthMultiplier': {
        description: '雞血量倍率 - 控制雞隻生命值（通常低）',
        example: 'scum.ChickenMaxHealthMultiplier=1.000000',
        type: 'float',
        category: '生物設定'
    },
    'scum.DeerMaxHealthMultiplier': {
        description: '鹿血量倍率 - 控制鹿隻的血量強度',
        example: 'scum.DeerMaxHealthMultiplier=1.000000',
        type: 'float',
        category: '生物設定'
    },
    'scum.DonkeyMaxHealthMultiplier': {
        description: '驢子血量倍率 - 控制驢子的耐久值',
        example: 'scum.DonkeyMaxHealthMultiplier=1.000000',
        type: 'float',
        category: '生物設定'
    },
    'scum.GoatMaxHealthMultiplier': {
        description: '山羊血量倍率 - 控制山羊血量倍率',
        example: 'scum.GoatMaxHealthMultiplier=1.000000',
        type: 'float',
        category: '生物設定'
    },
    'scum.HorseMaxHealthMultiplier': {
        description: '馬血量倍率 - 調整馬匹生命值（對騎乘平衡有影響）',
        example: 'scum.HorseMaxHealthMultiplier=1.000000',
        type: 'float',
        category: '生物設定'
    },
    'scum.RabbitMaxHealthMultiplier': {
        description: '兔子血量倍率 - 影響兔子是否容易被殺死',
        example: 'scum.RabbitMaxHealthMultiplier=1.000000',
        type: 'float',
        category: '生物設定'
    },
    'scum.WolfMaxHealthMultiplier': {
        description: '狼血量倍率 - 調整狼的戰鬥能力與生命值',
        example: 'scum.WolfMaxHealthMultiplier=1.000000',
        type: 'float',
        category: '生物設定'
    },
    'scum.BearMaxHealthMultiplier': {
        description: '熊最大血量倍率 - 調整野生熊的最大 HP 倍率，1 為原始值',
        example: 'scum.BearMaxHealthMultiplier=1.000000',
        type: 'float',
        category: '生物設定'
    },

    // [Vehicles] 載具設定
    'scum.FuelDrainFromEngineMultiplier': {
        description: '引擎燃料消耗倍數 - 引擎運轉時的燃料消耗倍數',
        example: 'scum.FuelDrainFromEngineMultiplier=1.000000',
        type: 'float',
        category: '載具設定'
    },
    'scum.BatteryDrainFromEngineMultiplier': {
        description: '引擎電池消耗倍數 - 引擎運轉時的電池消耗倍數',
        example: 'scum.BatteryDrainFromEngineMultiplier=1.000000',
        type: 'float',
        category: '載具設定'
    },
    'scum.MaximumTimeOfVehicleInactivity': {
        description: '載具最大閒置時間 - 載具閒置多久後會被清理',
        example: 'scum.MaximumTimeOfVehicleInactivity=240:00:00',
        type: 'string',
        category: '載具設定'
    },
    'scum.BatteryDrainFromDevicesMultiplier': {
        description: '載具電池耗電倍率（設備） - 控制因裝置（如大燈）導致的電量消耗',
        example: 'scum.BatteryDrainFromDevicesMultiplier=1.000000',
        type: 'float',
        category: '載具設定'
    },
    'scum.BatteryDrainFromInactivityMultiplier': {
        description: '載具閒置耗電倍率 - 車輛閒置一段時間後自耗電速率',
        example: 'scum.BatteryDrainFromInactivityMultiplier=1.000000',
        type: 'float',
        category: '載具設定'
    },
    'scum.BatteryChargeWithAlternatorMultiplier': {
        description: '發電機充電倍率 - 車輛引擎運作時的電池回充倍率',
        example: 'scum.BatteryChargeWithAlternatorMultiplier=1.000000',
        type: 'float',
        category: '載具設定'
    },
    'scum.BatteryChargeWithDynamoMultiplier': {
        description: '動能發電回充倍率 - 使用動能裝置（如腳踏車）對電池充電的倍率',
        example: 'scum.BatteryChargeWithDynamoMultiplier=1.000000',
        type: 'float',
        category: '載具設定'
    },
    'scum.MaximumTimeForVehiclesInForbiddenZones': {
        description: '禁區車輛停留上限 - 車輛若停在禁區超過此時間會被刪除',
        example: 'scum.MaximumTimeForVehiclesInForbiddenZones=24:00:00',
        type: 'string',
        category: '載具設定'
    },
    'scum.LogVehicleDestroyed': {
        description: '紀錄車輛毀損 - 是否在伺服器日誌中紀錄載具被破壞的訊息 (0=否, 1=是)',
        example: 'scum.LogVehicleDestroyed=1',
        type: 'number',
        category: '載具設定'
    },
    'scum.KingletDusterMaxAmount': {
        description: 'KingletDuster 總數上限 - 世界上最多能出現此載具數量',
        example: 'scum.KingletDusterMaxAmount=5',
        type: 'number',
        category: '載具設定'
    },
    'scum.KingletDusterMaxFunctionalAmount': {
        description: 'KingletDuster 可用數量上限 - 可使用（未報廢）載具數上限',
        example: 'scum.KingletDusterMaxFunctionalAmount=3',
        type: 'number',
        category: '載具設定'
    },
    'scum.KingletDusterMinPurchasedAmount': {
        description: 'KingletDuster 商店最少數量 - 商人最少保持幾輛待售',
        example: 'scum.KingletDusterMinPurchasedAmount=1',
        type: 'number',
        category: '載具設定'
    },
    'scum.DirtbikeMaxAmount': {
        description: '越野機車 總數上限 - 世界上最多能存在的 越野機車 數量',
        example: 'scum.DirtbikeMaxAmount=10',
        type: 'number',
        category: '載具設定'
    },
    'scum.DirtbikeMaxFunctionalAmount': {
        description: '越野機車 功能上限 - 可正常使用的 越野機車 數量上限',
        example: 'scum.DirtbikeMaxFunctionalAmount=8',
        type: 'number',
        category: '載具設定'
    },
    'scum.DirtbikeMinPurchasedAmount': {
        description: '越野機車 商店供應下限 - 商人最少保留可售的 越野機車 數量',
        example: 'scum.DirtbikeMinPurchasedAmount=2',
        type: 'number',
        category: '載具設定'
    },
    'scum.LaikaMaxAmount': {
        description: '萊卡車 總數上限 - 世界上最多能存在的 萊卡車 數量',
        example: 'scum.LaikaMaxAmount=8',
        type: 'number',
        category: '載具設定'
    },
    'scum.LaikaMaxFunctionalAmount': {
        description: '萊卡車 功能上限 - 可正常使用的 萊卡車 數量上限',
        example: 'scum.LaikaMaxFunctionalAmount=6',
        type: 'number',
        category: '載具設定'
    },
    'scum.LaikaMinPurchasedAmount': {
        description: '萊卡車 商店供應下限 - 商人最少保留可售的 萊卡車 數量',
        example: 'scum.LaikaMinPurchasedAmount=1',
        type: 'number',
        category: '載具設定'
    },
    'scum.MotorboatMaxAmount': {
        description: '汽艇 總數上限 - 世界上最多能存在的 汽艇 數量',
        example: 'scum.MotorboatMaxAmount=6',
        type: 'number',
        category: '載具設定'
    },
    'scum.MotorboatMaxFunctionalAmount': {
        description: '汽艇 功能上限 - 可正常使用的 汽艇 數量上限',
        example: 'scum.MotorboatMaxFunctionalAmount=4',
        type: 'number',
        category: '載具設定'
    },
    'scum.MotorboatMinPurchasedAmount': {
        description: '汽艇 商店供應下限 - 商人最少保留可售的 汽艇 數量',
        example: 'scum.MotorboatMinPurchasedAmount=1',
        type: 'number',
        category: '載具設定'
    },
    'scum.WheelbarrowMaxAmount': {
        description: '手推車 總數上限 - 世界上最多能存在的 手推車 數量',
        example: 'scum.WheelbarrowMaxAmount=20',
        type: 'number',
        category: '載具設定'
    },
    'scum.WheelbarrowMaxFunctionalAmount': {
        description: '手推車 功能上限 - 可正常使用的 手推車 數量上限',
        example: 'scum.WheelbarrowMaxFunctionalAmount=15',
        type: 'number',
        category: '載具設定'
    },
    'scum.WheelbarrowMinPurchasedAmount': {
        description: '手推車 商店供應下限 - 商人最少保留可售的 手推車 數量',
        example: 'scum.WheelbarrowMinPurchasedAmount=3',
        type: 'number',
        category: '載具設定'
    },
    'scum.WolfswagenMaxAmount': {
        description: '大眾車 總數上限 - 世界上最多能存在的 大眾車 數量',
        example: 'scum.WolfswagenMaxAmount=8',
        type: 'number',
        category: '載具設定'
    },
    'scum.WolfswagenMaxFunctionalAmount': {
        description: '大眾車 功能上限 - 可正常使用的 大眾車 數量上限',
        example: 'scum.WolfswagenMaxFunctionalAmount=6',
        type: 'number',
        category: '載具設定'
    },
    'scum.WolfswagenMinPurchasedAmount': {
        description: '大眾車 商店供應下限 - 商人最少保留可售的 大眾車 數量',
        example: 'scum.WolfswagenMinPurchasedAmount=1',
        type: 'number',
        category: '載具設定'
    },
    'scum.BicycleMaxAmount': {
        description: '腳踏車 總數上限 - 世界上最多能存在的 腳踏車 數量',
        example: 'scum.BicycleMaxAmount=25',
        type: 'number',
        category: '載具設定'
    },
    'scum.BicycleMaxFunctionalAmount': {
        description: '腳踏車 功能上限 - 可正常使用的 腳踏車 數量上限',
        example: 'scum.BicycleMaxFunctionalAmount=20',
        type: 'number',
        category: '載具設定'
    },
    'scum.BicycleMinPurchasedAmount': {
        description: '腳踏車 商店供應下限 - 商人最少保留可售的 腳踏車 數量',
        example: 'scum.BicycleMinPurchasedAmount=5',
        type: 'number',
        category: '載具設定'
    },
    'scum.RagerMaxAmount': {
        description: '越野腳踏車 總數上限 - 世界上最多能存在的 越野腳踏車 數量',
        example: 'scum.RagerMaxAmount=15',
        type: 'number',
        category: '載具設定'
    },
    'scum.RagerMaxFunctionalAmount': {
        description: '越野腳踏車 功能上限 - 可正常使用的 越野腳踏車 數量上限',
        example: 'scum.RagerMaxFunctionalAmount=12',
        type: 'number',
        category: '載具設定'
    },
    'scum.RagerMinPurchasedAmount': {
        description: '越野腳踏車 商店供應下限 - 商人最少保留可售的 越野腳踏車 數量',
        example: 'scum.RagerMinPurchasedAmount=3',
        type: 'number',
        category: '載具設定'
    },
    'scum.CruiserMaxAmount': {
        description: '休旅車 總數上限 - 世界上最多能存在的 休旅車 數量',
        example: 'scum.CruiserMaxAmount=6',
        type: 'number',
        category: '載具設定'
    },
    'scum.CruiserMaxFunctionalAmount': {
        description: '休旅車 功能上限 - 可正常使用的 休旅車 數量上限',
        example: 'scum.CruiserMaxFunctionalAmount=4',
        type: 'number',
        category: '載具設定'
    },
    'scum.CruiserMinPurchasedAmount': {
        description: '休旅車 商店供應下限 - 商人最少保留可售的 休旅車 數量',
        example: 'scum.CruiserMinPurchasedAmount=1',
        type: 'number',
        category: '載具設定'
    },
    'scum.RisMaxAmount': {
        description: '三輪車 總數上限 - 世界上最多能存在的 三輪車 數量',
        example: 'scum.RisMaxAmount=12',
        type: 'number',
        category: '載具設定'
    },
    'scum.RisMaxFunctionalAmount': {
        description: '三輪車 功能上限 - 可正常使用的 三輪車 數量上限',
        example: 'scum.RisMaxFunctionalAmount=10',
        type: 'number',
        category: '載具設定'
    },
    'scum.RisMinPurchasedAmount': {
        description: '三輪車 商店供應下限 - 商人最少保留可售的 三輪車 數量',
        example: 'scum.RisMinPurchasedAmount=2',
        type: 'number',
        category: '載具設定'
    },
    'scum.SUPMaxAmount': {
        description: '立式划槳 總數上限 - 世界上最多能存在的 立式划槳 數量',
        example: 'scum.SUPMaxAmount=15',
        type: 'number',
        category: '載具設定'
    },
    'scum.SUPMaxFunctionalAmount': {
        description: '立式划槳 功能上限 - 可正常使用的 立式划槳 數量上限',
        example: 'scum.SUPMaxFunctionalAmount=12',
        type: 'number',
        category: '載具設定'
    },
    'scum.SUPMinPurchasedAmount': {
        description: '立式划槳 商店供應下限 - 商人最少保留可售的 立式划槳 數量',
        example: 'scum.SUPMinPurchasedAmount=3',
        type: 'number',
        category: '載具設定'
    },
    'scum.KingletMarinerMaxAmount': {
        description: '水上飛機 總數上限 - 世界上最多能存在的 水上飛機 數量',
        example: 'scum.KingletMarinerMaxAmount=3',
        type: 'number',
        category: '載具設定'
    },
    'scum.KingletMarinerMaxFunctionalAmount': {
        description: '水上飛機 功能上限 - 可正常使用的 水上飛機 數量上限',
        example: 'scum.KingletMarinerMaxFunctionalAmount=2',
        type: 'number',
        category: '載具設定'
    },
    'scum.KingletMarinerMinPurchasedAmount': {
        description: '水上飛機 商店供應下限 - 商人最少保留可售的 水上飛機 數量',
        example: 'scum.KingletMarinerMinPurchasedAmount=1',
        type: 'number',
        category: '載具設定'
    },
    'scum.TractorMaxAmount': {
        description: '拖拉機 總數上限 - 世界上最多能存在的 拖拉機 數量',
        example: 'scum.TractorMaxAmount=8',
        type: 'number',
        category: '載具設定'
    },
    'scum.TractorMaxFunctionalAmount': {
        description: '拖拉機 功能上限 - 可正常使用的 拖拉機 數量上限',
        example: 'scum.TractorMaxFunctionalAmount=6',
        type: 'number',
        category: '載具設定'
    },
    'scum.TractorMinPurchasedAmount': {
        description: '拖拉機 商店供應下限 - 商人最少保留可售的 拖拉機 數量',
        example: 'scum.TractorMinPurchasedAmount=1',
        type: 'number',
        category: '載具設定'
    },

    // [Damage] 傷害設定
    'scum.HumanToHumanDamageMultiplier': {
        description: '玩家對玩家傷害倍數 - 玩家之間造成傷害的倍數',
        example: 'scum.HumanToHumanDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.SentryDamageMultiplier': {
        description: '哨兵傷害倍數 - 哨兵機器人造成傷害的倍數',
        example: 'scum.SentryDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.ZombieDamageMultiplier': {
        description: '殭屍傷害倍數 - 殭屍造成傷害的倍數',
        example: 'scum.ZombieDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.DropshipHealthMultiplier': {
        description: '空投運輸機血量倍率 - 控制空投運輸機的血量比例設定',
        example: 'scum.DropshipHealthMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.SentryHealthMultiplier': {
        description: '哨塔血量倍率 - 調整自動哨塔的生命值強度',
        example: 'scum.SentryHealthMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.BaseBuildingAttackerSentryHealthMultiplier': {
        description: '攻擊者哨塔生命倍率 - 調整由玩家建造並具有攻擊功能的哨塔血量',
        example: 'scum.BaseBuildingAttackerSentryHealthMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.ArmedNPCDifficultyLevel': {
        description: '武裝NPC難度等級 - 控制武裝AI的難易度（越高越強）',
        example: 'scum.ArmedNPCDifficultyLevel=1',
        type: 'number',
        category: '傷害設定'
    },
    'scum.ProbabilityForArmedNPCToDropItemFromHandsWhenSearched': {
        description: '搜身掉落持有物品機率 - 玩家搜尋武裝NPC時，NPC掉落手中物品的機率',
        example: 'scum.ProbabilityForArmedNPCToDropItemFromHandsWhenSearched=0.500000',
        type: 'float',
        category: '傷害設定'
    },

    // 詳細傷害設定
    'scum.HumanToHumanArmedMeleeDamageMultiplier': {
        description: '玩家近戰武器傷害倍率 - 玩家之間用武器互砍的傷害調整',
        example: 'scum.HumanToHumanArmedMeleeDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.HumanToHumanUnarmedMeleeDamageMultiplier': {
        description: '徒手攻擊傷害倍率 - 玩家空手互毆時造成的傷害倍率',
        example: 'scum.HumanToHumanUnarmedMeleeDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.HumanToHumanThrowingDamageMultiplier': {
        description: '投擲傷害倍率 - 丟擲武器（如斧頭、長矛）造成的傷害比例',
        example: 'scum.HumanToHumanThrowingDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.SentryRailgunDamageMultiplier': {
        description: '哨塔電磁砲傷害倍率 - 哨塔電磁砲造成的傷害倍率',
        example: 'scum.SentryRailgunDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.SentryGrenadeDamageMultiplier': {
        description: '哨塔手榴彈傷害倍率 - 哨塔投擲手榴彈時的爆炸威力',
        example: 'scum.SentryGrenadeDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.BaseBuildingAttackerSentryDamageMultiplier': {
        description: '玩家建築哨塔傷害倍率 - 玩家建造哨塔對敵人造成的傷害倍率',
        example: 'scum.BaseBuildingAttackerSentryDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.BaseBuildingAttackerSentryRailgunDamageMultiplier': {
        description: '玩家哨塔電磁砲倍率 - 同上，電磁砲專用',
        example: 'scum.BaseBuildingAttackerSentryRailgunDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.BaseBuildingAttackerSentryGrenadeDamageMultiplier': {
        description: '玩家哨塔手榴彈倍率 - 同上，爆炸物專用',
        example: 'scum.BaseBuildingAttackerSentryGrenadeDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.SentryBaseBuildingDamageMultiplier': {
        description: '哨塔對基地建築傷害倍率 - 哨塔攻擊玩家基地時的傷害程度',
        example: 'scum.SentryBaseBuildingDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.DropshipDamageMultiplier': {
        description: '空投機體造成的碰撞傷害倍率 - Dropship 撞擊造成的傷害',
        example: 'scum.DropshipDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.DropshipRailgunDamageMultiplier': {
        description: '空投機電磁砲倍率 - 若搭配特殊事件時開啟此裝備',
        example: 'scum.DropshipRailgunDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },
    'scum.DropshipBaseBuildingElementsDamageMultiplier': {
        description: '空投機攻擊建築倍率 - 針對建築結構的攻擊威力',
        example: 'scum.DropshipBaseBuildingElementsDamageMultiplier=1.000000',
        type: 'float',
        category: '傷害設定'
    },

    // 物品耐久度設定
    'scum.ItemDecayDamageMultiplier': {
        description: '一般物品耐久度損耗倍率 - 所有裝備、食物、工具等自然衰退速率',
        example: 'scum.ItemDecayDamageMultiplier=1.000000',
        type: 'float',
        category: '物品管理'
    },
    'scum.FoodDecayDamageMultiplier': {
        description: '食物腐敗速率 - 食物過期或腐敗的速度調整',
        example: 'scum.FoodDecayDamageMultiplier=1.000000',
        type: 'float',
        category: '物品管理'
    },
    'scum.WeaponDecayDamageOnFiring': {
        description: '開火損耗倍率 - 每次射擊導致武器損壞的倍率',
        example: 'scum.WeaponDecayDamageOnFiring=1.000000',
        type: 'float',
        category: '物品管理'
    },
    'scum.LockProtectionDamageMultiplier': {
        description: '鎖具防護耐久倍率 - 控制鎖在被破壞時承受的傷害倍率',
        example: 'scum.LockProtectionDamageMultiplier=1.000000',
        type: 'float',
        category: '物品管理'
    },

    // 旗幟和建築設定
    'scum.FlagOvertakeDuration': {
        description: '旗幟可奪取時間 - 幾小時後其他玩家可奪取無主旗幟',
        example: 'scum.FlagOvertakeDuration=168.000000',
        type: 'float',
        category: '建築設定'
    },
    'scum.MaximumAmountOfElementsPerFlag': {
        description: '每面旗可放置建築數上限 - 單一旗幟範圍內允許的最大建築元件數',
        example: 'scum.MaximumAmountOfElementsPerFlag=100',
        type: 'number',
        category: '建築設定'
    },
    'scum.ExtraElementsPerFlagForAdditionalSquadMember': {
        description: '每位小隊成員額外建築數 - 小隊人數增加時每人增加可建造上限數',
        example: 'scum.ExtraElementsPerFlagForAdditionalSquadMember=10',
        type: 'number',
        category: '建築設定'
    },
    'scum.MaximumNumberOfExpandedElementsPerFlag': {
        description: '每面旗最多擴展額外數量 - 超過原限制可再擴充的最大建築數量',
        example: 'scum.MaximumNumberOfExpandedElementsPerFlag=50',
        type: 'number',
        category: '建築設定'
    },
    'scum.AllowMultipleFlagsPerPlayer': {
        description: '允許每人多旗 - 一個玩家是否能設立多面旗幟 (0=否, 1=是)',
        example: 'scum.AllowMultipleFlagsPerPlayer=0',
        type: 'number',
        category: '建築設定'
    },
    'scum.AllowFlagPlacementOnBBElements': {
        description: '可放旗在建築上 - 是否允許將旗幟設在已存在的建築元素上 (0=否, 1=是)',
        example: 'scum.AllowFlagPlacementOnBBElements=0',
        type: 'number',
        category: '建築設定'
    },
    'scum.ChestAcquisitionDuration': {
        description: '寶箱據為己有時間 - 玩家撿到他人寶箱多久後可視為己有',
        example: 'scum.ChestAcquisitionDuration=24:00:00',
        type: 'string',
        category: '建築設定'
    },
    'scum.WeaponRackMaxAmountPerFlagArea': {
        description: '旗區最大武器架數量 - 旗幟範圍內最多能放多少武器架',
        example: 'scum.WeaponRackMaxAmountPerFlagArea=10',
        type: 'number',
        category: '建築設定'
    },
    'scum.WeaponRackStartDecayingIfFlagAreaHasMoreThan': {
        description: '超額開始損壞門檻 - 超過上限後，武器架會開始自然損壞',
        example: 'scum.WeaponRackStartDecayingIfFlagAreaHasMoreThan=8',
        type: 'number',
        category: '建築設定'
    },
    'scum.WallWeaponRackMaxAmountPerFlagArea': {
        description: '壁掛武器架最大數 - 牆上武器架的限制',
        example: 'scum.WallWeaponRackMaxAmountPerFlagArea=5',
        type: 'number',
        category: '建築設定'
    },
    'scum.WallWeaponRackStartDecayingIfFlagAreaHasMoreThan': {
        description: '壁掛武器架超限損壞門檻 - 超過時開始損壞',
        example: 'scum.WallWeaponRackStartDecayingIfFlagAreaHasMoreThan=4',
        type: 'number',
        category: '建築設定'
    },
    'scum.WellMaxAmountPerFlagArea': {
        description: '旗區最大水井數量 - 同旗區最多可蓋幾口井',
        example: 'scum.WellMaxAmountPerFlagArea=3',
        type: 'number',
        category: '建築設定'
    },
    'scum.WellStartDecayingIfFlagAreaHasMoreThan': {
        description: '超限水井開始損壞門檻 - 超過後會自動開始腐壞機制',
        example: 'scum.WellStartDecayingIfFlagAreaHasMoreThan=2',
        type: 'number',
        category: '建築設定'
    },
    'scum.TurretMaxAmountPerFlagArea': {
        description: '最大砲塔數量（旗區） - 控制自動防禦砲塔的數量上限',
        example: 'scum.TurretMaxAmountPerFlagArea=2',
        type: 'number',
        category: '建築設定'
    },
    'scum.TurretStartDecayingIfFlagAreaHasMoreThan': {
        description: '砲塔超量損壞門檻 - 超出上限後是否會開始衰退耐久',
        example: 'scum.TurretStartDecayingIfFlagAreaHasMoreThan=1',
        type: 'number',
        category: '建築設定'
    },
    'scum.GardenMaxAmountPerFlagArea': {
        description: '最大農園數量（旗區） - 控制農園設施的建造上限',
        example: 'scum.GardenMaxAmountPerFlagArea=5',
        type: 'number',
        category: '建築設定'
    },
    'scum.AllowFloorPlacementOnHalfAndLowWalls': {
        description: '可在半牆／矮牆上放地板 - 是否允許將地板放置在特定矮牆上 (0=否, 1=是)',
        example: 'scum.AllowFloorPlacementOnHalfAndLowWalls=1',
        type: 'number',
        category: '建築設定'
    },
    'scum.AllowWallPlacementOnHalfAndLowWalls': {
        description: '可在半牆／矮牆上放牆 - 是否允許將牆壁直接疊在半牆或矮牆上（通常設為 1） (0=否, 1=是)',
        example: 'scum.AllowWallPlacementOnHalfAndLowWalls=1',
        type: 'number',
        category: '建築設定'
    },

    // 地堡系統設定
    'scum.AbandonedBunkerCommotionThreshold': {
        description: '地堡干擾觸發門檻 - 累積噪音量超過此值時觸發地堡敵人警報',
        example: 'scum.AbandonedBunkerCommotionThreshold=100.000000',
        type: 'float',
        category: '地堡系統'
    },
    'scum.AbandonedBunkerCommotionThresholdPerPlayerExtra': {
        description: '每人增加干擾門檻 - 每新增一名玩家，地堡觸發門檻增加值',
        example: 'scum.AbandonedBunkerCommotionThresholdPerPlayerExtra=50.000000',
        type: 'float',
        category: '地堡系統'
    },
    'scum.AbandonedBunkerEnemyActivationThreshold': {
        description: '敵人觸發門檻 - 玩家進入地堡時，需要達到的聲音偵測量以觸發敵人',
        example: 'scum.AbandonedBunkerEnemyActivationThreshold=75.000000',
        type: 'float',
        category: '地堡系統'
    },
    'scum.AbandonedBunkerEnemyActivationThresholdPerPlayerExtra': {
        description: '每人敵人觸發增加量 - 每多一人時，敵人觸發門檻提高多少',
        example: 'scum.AbandonedBunkerEnemyActivationThresholdPerPlayerExtra=25.000000',
        type: 'float',
        category: '地堡系統'
    },
    'scum.AbandonedBunkerResetArmoryLockersOnActivationOnly': {
        description: '僅首次觸發重置Armory - 只有第一次觸發時重置地堡武器櫃，後續不再重置 (0=否, 1=是)',
        example: 'scum.AbandonedBunkerResetArmoryLockersOnActivationOnly=1',
        type: 'number',
        category: '地堡系統'
    },

    // 地圖設定
    'scum.ShouldDestroyEntitiesOutsideMapLimitsOnRestart': {
        description: '重啟時移除地圖外物件 - 是否在伺服器重啟時自動摧毀範圍外的實體 (0=否, 1=是)',
        example: 'scum.ShouldDestroyEntitiesOutsideMapLimitsOnRestart=1',
        type: 'number',
        category: '地圖設定'
    },
    'scum.EnableLockedLootContainers': {
        description: '啟用鎖定寶箱 - 是否允許生成附鎖寶箱，需要鑰匙才能開啟 (0=否, 1=是)',
        example: 'scum.EnableLockedLootContainers=1',
        type: 'number',
        category: '地圖設定'
    },
    'scum.CustomMapEnabled': {
        description: '自訂地圖啟用 - 是否啟用自訂地圖座標規則（配合 center/width） (0=否, 1=是)',
        example: 'scum.CustomMapEnabled=0',
        type: 'number',
        category: '地圖設定'
    },
    'scum.CustomMapCenterXCoordinate': {
        description: '自訂地圖中心 X 座標 - 當啟用自訂地圖時的中心 X 軸',
        example: 'scum.CustomMapCenterXCoordinate=0.000000',
        type: 'float',
        category: '地圖設定'
    },
    'scum.CustomMapCenterYCoordinate': {
        description: '自訂地圖中心 Y 座標 - 自訂地圖中心 Y 軸',
        example: 'scum.CustomMapCenterYCoordinate=0.000000',
        type: 'float',
        category: '地圖設定'
    },
    'scum.CustomMapWidth': {
        description: '自訂地圖寬度（公里） - 自訂地圖的橫向寬度值（以公里為單位）',
        example: 'scum.CustomMapWidth=10.000000',
        type: 'float',
        category: '地圖設定'
    },
    'scum.CustomMapHeight': {
        description: '自訂地圖高度（公里） - 自訂地圖的縱向高度值',
        example: 'scum.CustomMapHeight=10.000000',
        type: 'float',
        category: '地圖設定'
    },
    'scum.DoorLockability.Garage': {
        description: '車庫門可觸發鎖定 - 控制玩家是否可以用鎖定功能鎖住車庫大門 (0=否, 1=是)',
        example: 'scum.DoorLockability.Garage=1',
        type: 'number',
        category: '地圖設定'
    },

    // 空投系統設定
    'scum.CargoDropCooldownMinimum': {
        description: '空投最小冷卻時間 - 空投相隔的最短等待時間（秒）',
        example: 'scum.CargoDropCooldownMinimum=1800.000000',
        type: 'float',
        category: '空投系統'
    },
    'scum.CargoDropCooldownMaximum': {
        description: '空投最大冷卻時間 - 空投間隔的最長等待時間（秒）',
        example: 'scum.CargoDropCooldownMaximum=3600.000000',
        type: 'float',
        category: '空投系統'
    },
    'scum.CargoDropFallDelay': {
        description: '空投跳傘機降落延遲 - 空投開始後多久會落下物資',
        example: 'scum.CargoDropFallDelay=30.000000',
        type: 'float',
        category: '空投系統'
    },
    'scum.CargoDropFallDuration': {
        description: '空投物資降落時間 - 空投物資從空中掉落所需時間（秒）',
        example: 'scum.CargoDropFallDuration=60.000000',
        type: 'float',
        category: '空投系統'
    },
    'scum.CargoDropSelfdestructTime': {
        description: '空投逾時自毀時間 - 空投若無人拾取，多久後自動消失或爆炸',
        example: 'scum.CargoDropSelfdestructTime=1800.000000',
        type: 'float',
        category: '空投系統'
    },
    'scum.CargoDropZombieEncounterWeightMultiplier': {
        description: '空投吸引殭屍權重倍率 - 控制空投區域被殭屍主動攻擊的機率',
        example: 'scum.CargoDropZombieEncounterWeightMultiplier=1.000000',
        type: 'float',
        category: '空投系統'
    },
    'scum.CargoDropDropshipEncounterWeightMultiplier': {
        description: '空投吸引空投運輸機機率倍率 - 控制空投是否容易吸引運輸機支援事件',
        example: 'scum.CargoDropDropshipEncounterWeightMultiplier=1.000000',
        type: 'float',
        category: '空投系統'
    },

    // 狩獵系統設定
    'scum.MaxAllowedHunts': {
        description: '最大同時狩獵任務數 - 控制伺服器上最多能存在的狩獵任務數量',
        example: 'scum.MaxAllowedHunts=5',
        type: 'number',
        category: '狩獵系統'
    },
    'scum.HuntTriggerChanceOverride_ContinentalForest': {
        description: '森林區觸發狩獵機率 - 指定地形（森林）狩獵事件發生機率。-1 表示預設值',
        example: 'scum.HuntTriggerChanceOverride_ContinentalForest=-1.000000',
        type: 'float',
        category: '狩獵系統'
    },
    'scum.HuntTriggerChanceOverride_ContinentalMeadow': {
        description: '草原區觸發狩獵機率 - 控制草原地區觸發狩獵任務的機率',
        example: 'scum.HuntTriggerChanceOverride_ContinentalMeadow=-1.000000',
        type: 'float',
        category: '狩獵系統'
    },
    'scum.HuntTriggerChanceOverride_Mediterranean': {
        description: '地中海區觸發狩獵機率 - 調整地中海氣候區的狩獵事件出現率',
        example: 'scum.HuntTriggerChanceOverride_Mediterranean=-1.000000',
        type: 'float',
        category: '狩獵系統'
    },
    'scum.HuntTriggerChanceOverride_Mountain': {
        description: '山區觸發狩獵機率 - 控制山地地形出現狩獵任務的頻率',
        example: 'scum.HuntTriggerChanceOverride_Mountain=-1.000000',
        type: 'float',
        category: '狩獵系統'
    },
    'scum.HuntTriggerChanceOverride_Urban': {
        description: '城市區觸發狩獵機率 - 城市區域能否觸發狩獵（多為野獸入侵）',
        example: 'scum.HuntTriggerChanceOverride_Urban=-1.000000',
        type: 'float',
        category: '狩獵系統'
    },
    'scum.HuntTriggerChanceOverride_Village': {
        description: '村落區觸發狩獵機率 - 控制村莊是否可能發生狩獵事件',
        example: 'scum.HuntTriggerChanceOverride_Village=-1.000000',
        type: 'float',
        category: '狩獵系統'
    },
    'scum.HuntFailureTime': {
        description: '狩獵失敗判定時間 - 玩家多久未完成狩獵任務會判定為失敗（秒）',
        example: 'scum.HuntFailureTime=3600.000000',
        type: 'float',
        category: '狩獵系統'
    },
    'scum.HuntFailureDistance': {
        description: '狩獵任務失敗距離 - 玩家與目標動物超過此距離會失敗（公尺）',
        example: 'scum.HuntFailureDistance=1000.000000',
        type: 'float',
        category: '狩獵系統'
    },

    // 鑰匙卡系統設定
    'scum.MaxAllowedKillboxKeycards': {
        description: '總共允許鑰匙卡數量 - 限制伺服器中同時存在的 Killbox 鑰匙卡數',
        example: 'scum.MaxAllowedKillboxKeycards=10',
        type: 'number',
        category: '鑰匙卡系統'
    },
    'scum.MaxAllowedKillboxKeycards_PoliceStation': {
        description: '警察局產出的鑰匙卡限制 - 控制從警察局可獲得的鑰匙卡最大數量',
        example: 'scum.MaxAllowedKillboxKeycards_PoliceStation=5',
        type: 'number',
        category: '鑰匙卡系統'
    },
    'scum.MaxAllowedKillboxKeycards_RadiationZone': {
        description: '輻射區鑰匙卡上限 - 控制從輻射區取得的鑰匙卡數量',
        example: 'scum.MaxAllowedKillboxKeycards_RadiationZone=3',
        type: 'number',
        category: '鑰匙卡系統'
    },
    'scum.AbandonedBunkerMaxSimultaneouslyActive': {
        description: '同時啟動的地堡上限 - 限制有多少個荒廢地堡可以同時處於活躍狀態',
        example: 'scum.AbandonedBunkerMaxSimultaneouslyActive=3',
        type: 'number',
        category: '鑰匙卡系統'
    },
    'scum.AbandonedBunkerActiveDurationHours': {
        description: '地堡啟動持續時間（小時） - 啟動後多久該地堡會自動關閉（單位：小時）',
        example: 'scum.AbandonedBunkerActiveDurationHours=24.000000',
        type: 'float',
        category: '鑰匙卡系統'
    },
    'scum.AbandonedBunkerKeyCardActiveDurationHours': {
        description: '地堡鑰匙卡有效時間 - 玩家使用鑰匙卡後多久可進入地堡',
        example: 'scum.AbandonedBunkerKeyCardActiveDurationHours=2.000000',
        type: 'float',
        category: '鑰匙卡系統'
    },
    'scum.SecretBunkerKeyCardActiveDurationHours': {
        description: '秘密地堡鑰匙卡時間 - 特殊地堡鑰匙卡啟動後的使用有效期',
        example: 'scum.SecretBunkerKeyCardActiveDurationHours=4.000000',
        type: 'float',
        category: '鑰匙卡系統'
    },

    // 重生系統設定
    'scum.AllowSectorRespawn': {
        description: '允許區域重生 - 玩家是否能選擇某個區塊重生（花 Fame） (0=否, 1=是)',
        example: 'scum.AllowSectorRespawn=1',
        type: 'number',
        category: '重生系統'
    },
    'scum.AllowShelterRespawn': {
        description: '允許避難所重生 - 玩家是否能在建造的避難所附近復活 (0=否, 1=是)',
        example: 'scum.AllowShelterRespawn=1',
        type: 'number',
        category: '重生系統'
    },
    'scum.AllowSquadmateRespawn': {
        description: '小隊友重生 - 玩家是否能重生到小隊成員旁邊 (0=否, 1=是)',
        example: 'scum.AllowSquadmateRespawn=1',
        type: 'number',
        category: '重生系統'
    },
    'scum.RandomRespawnPrice': {
        description: '隨機重生費用（Fame） - 玩家隨機復活的花費 Fame',
        example: 'scum.RandomRespawnPrice=0.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.SectorRespawnPrice': {
        description: '區域重生費用 - 指定區域復活的 Fame 花費',
        example: 'scum.SectorRespawnPrice=100.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.ShelterRespawnPrice': {
        description: '避難所重生價格 - 復活到避難所的代價，可為 Fame 或金幣（g）',
        example: 'scum.ShelterRespawnPrice=50.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.SquadRespawnPrice': {
        description: '小隊重生價格 - 重生到小隊成員旁的費用',
        example: 'scum.SquadRespawnPrice=25.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.RandomRespawnInitialTime': {
        description: '隨機重生等待時間 - 初次隨機復活需要等待時間',
        example: 'scum.RandomRespawnInitialTime=30.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.SectorRespawnInitialTime': {
        description: '區域復活等待時間 - 初次區域重生的等待秒數',
        example: 'scum.SectorRespawnInitialTime=60.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.ShelterRespawnInitialTime': {
        description: '避難所復活初始等待 - 同上，針對避難所',
        example: 'scum.ShelterRespawnInitialTime=45.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.SquadRespawnInitialTime': {
        description: '小隊復活初始等待 - 復活到小隊成員的初始延遲',
        example: 'scum.SquadRespawnInitialTime=30.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.RandomRespawnCooldown': {
        description: '隨機重生冷卻 - 下一次可隨機重生前的冷卻時間（秒）',
        example: 'scum.RandomRespawnCooldown=300.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.SectorRespawnCooldown': {
        description: '區域重生冷卻 - 冷卻時間越高，玩家要等待越久才能再次選擇區域重生',
        example: 'scum.SectorRespawnCooldown=600.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.ShelterRespawnCooldown': {
        description: '避難所重生冷卻 - 避難所復活間隔秒數',
        example: 'scum.ShelterRespawnCooldown=450.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.SquadRespawnCooldown': {
        description: '小隊復活冷卻時間 - 控制小隊復活的冷卻期',
        example: 'scum.SquadRespawnCooldown=300.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.RandomCooldownResetMultiplier': {
        description: '隨機復活冷卻重設倍率 - 控制重置等待時間的倍率（較少用途）',
        example: 'scum.RandomCooldownResetMultiplier=1.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.SectorCooldownResetMultiplier': {
        description: '區域復活冷卻重設倍率 - 用於計算額外付費重置冷卻',
        example: 'scum.SectorCooldownResetMultiplier=1.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.ShelterCooldownResetMultiplier': {
        description: '避難所復活冷卻重設倍率 - 同上，針對避難所',
        example: 'scum.ShelterCooldownResetMultiplier=1.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.SquadCooldownResetMultiplier': {
        description: '小隊復活冷卻重設倍率 - 計算冷卻重設的 Fame 成本倍率',
        example: 'scum.SquadCooldownResetMultiplier=1.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.RandomPricePerSquadmateModifier': {
        description: '隨機復活額外價格/隊友 - 隊伍人數會提升重生費用，0 = 不影響',
        example: 'scum.RandomPricePerSquadmateModifier=0.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.SectorPricePerSquadmateModifier': {
        description: '區域復活價格修正 - 同上，針對指定區域重生',
        example: 'scum.SectorPricePerSquadmateModifier=10.000000',
        type: 'float',
        category: '重生系統'
    },
    'scum.ShelterPricePerSquadmateModifier': {
        description: '避難所重生價格修正 - 同樣依據隊友數調整價格',
        example: 'scum.ShelterPricePerSquadmateModifier=5.000000',
        type: 'float',
        category: '重生系統'
    },

    // [Features] 功能設定
    'scum.FameGainMultiplier': {
        description: '名聲獲得倍數 - 獲得名聲點數的倍數',
        example: 'scum.FameGainMultiplier=1.000000',
        type: 'float',
        category: '遊戲功能'
    },
    'scum.BodySimulationSpeedMultiplier': {
        description: '身體模擬速度倍數 - 身體狀態變化的速度倍數',
        example: 'scum.BodySimulationSpeedMultiplier=3.840000',
        type: 'float',
        category: '遊戲功能'
    },
    'scum.MovementInertiaAmount': {
        description: '移動慣性量 - 角色移動的慣性程度',
        example: 'scum.MovementInertiaAmount=1.000000',
        type: 'float',
        category: '遊戲功能'
    },
    'scum.StaminaDrainOnJumpMultiplier': {
        description: '跳躍體力消耗倍數 - 跳躍時消耗體力的倍數',
        example: 'scum.StaminaDrainOnJumpMultiplier=1.000000',
        type: 'float',
        category: '遊戲功能'
    },
    'scum.DisableExhaustion': {
        description: '禁用疲勞系統 - 是否禁用疲勞機制 (0=否, 1=是)',
        example: 'scum.DisableExhaustion=0',
        type: 'number',
        category: '遊戲功能'
    },
    'scum.FamePointPenaltyOnDeath': {
        description: '死亡名聲懲罰 - 玩家死亡時損失的名聲比例（0.1 = 10%）',
        example: 'scum.FamePointPenaltyOnDeath=0.100000',
        type: 'float',
        category: '遊戲功能'
    },
    'scum.FamePointPenaltyOnKilled': {
        description: '被殺名聲懲罰 - 被其他玩家殺害時的額外名聲損失比例',
        example: 'scum.FamePointPenaltyOnKilled=0.050000',
        type: 'float',
        category: '遊戲功能'
    },
    'scum.FamePointRewardOnKill': {
        description: '擊殺獎勵 - 成功擊殺他人時獲得的名聲點數比例',
        example: 'scum.FamePointRewardOnKill=0.100000',
        type: 'float',
        category: '遊戲功能'
    },

    // 伺服器管理設定
    'scum.PartialWipe': {
        description: '部分清除 - 重設部分資料，例如旗幟或建築但保留人物等 (0=否, 1=是)',
        example: 'scum.PartialWipe=0',
        type: 'number',
        category: '伺服器管理'
    },
    'scum.GoldWipe': {
        description: '金錢清除 - 清除所有玩家的金錢（保留其他內容） (0=否, 1=是)',
        example: 'scum.GoldWipe=0',
        type: 'number',
        category: '伺服器管理'
    },
    'scum.FullWipe': {
        description: '完全清除 - 對伺服器做完整重置，等同於重新開服 (0=否, 1=是)',
        example: 'scum.FullWipe=0',
        type: 'number',
        category: '伺服器管理'
    },

    // 物品管理設定
    'scum.ItemVirtualizationRelevancyUpdatePeriod': {
        description: '虛擬物品更新週期 - 幾秒鐘更新一次附近虛擬物件的可見性',
        example: 'scum.ItemVirtualizationRelevancyUpdatePeriod=5.000000',
        type: 'float',
        category: '物品管理'
    },
    'scum.ItemVirtualizationEventProcessingTimeBudget': {
        description: '虛擬事件處理時間限制 - 單次事件處理最長可用的毫秒數',
        example: 'scum.ItemVirtualizationEventProcessingTimeBudget=10.000000',
        type: 'float',
        category: '物品管理'
    },
    'scum.ItemVirtualizationVisitorDistanceTravelledForUpdate': {
        description: '玩家移動距離更新限制 - 玩家移動多少距離後觸發虛擬物品更新',
        example: 'scum.ItemVirtualizationVisitorDistanceTravelledForUpdate=100.000000',
        type: 'float',
        category: '物品管理'
    },
    'scum.ItemVirtualizationVisitorBounds': {
        description: '玩家影響範圍 - 玩家能觸發虛擬化更新的最大半徑',
        example: 'scum.ItemVirtualizationVisitorBounds=1000.000000',
        type: 'float',
        category: '物品管理'
    },
    'scum.VirtualizedItemBounds': {
        description: '虛擬物品生存邊界 - 虛擬化物品的存活範圍（越小越快被清除）',
        example: 'scum.VirtualizedItemBounds=2000.000000',
        type: 'float',
        category: '物品管理'
    },
    'scum.MaximumTimeForChestsInForbiddenZones': {
        description: '禁區寶箱存活時間 - 寶箱放在禁區最多可存活的時間',
        example: 'scum.MaximumTimeForChestsInForbiddenZones=24:00:00',
        type: 'string',
        category: '物品管理'
    },
    'scum.LogChestOwnership': {
        description: '寶箱持有紀錄 - 是否記錄誰建造、擁有寶箱（用於審查） (0=否, 1=是)',
        example: 'scum.LogChestOwnership=1',
        type: 'number',
        category: '物品管理'
    },

    // 系統設定
    'scum.SettingsVersion': {
        description: '設定版本代號 - 僅供系統識別，不需更動',
        example: 'scum.SettingsVersion=1',
        type: 'number',
        category: '系統設定'
    },
    'scum.MaxAllowedNPCs': {
        description: '最大 NPC 數量 - 系統可生成的 NPC 數量上限',
        example: 'scum.MaxAllowedNPCs=100',
        type: 'number',
        category: '系統設定'
    },

    // 遭遇系統設定
    'scum.EncounterBaseCharacterAmountMultiplier': {
        description: '遭遇敵人基礎數量倍率 - 增減遭遇時敵人出現的初始數量',
        example: 'scum.EncounterBaseCharacterAmountMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterExtraCharacterPerPlayerMultiplier': {
        description: '額外敵人數量（每玩家） - 玩家越多時，額外產生的敵人數量倍率',
        example: 'scum.EncounterExtraCharacterPerPlayerMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterExtraCharacterPlayerCapMultiplier': {
        description: '玩家上限數量倍率 - 控制敵人數量提升上限的玩家數',
        example: 'scum.EncounterExtraCharacterPlayerCapMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterCharacterRespawnTimeMultiplier': {
        description: '敵人重生時間倍率 - 死掉後敵人重生的速度控制',
        example: 'scum.EncounterCharacterRespawnTimeMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterCharacterRespawnBatchSizeMultiplier': {
        description: '批次重生倍率 - 敵人會同時重生幾隻（批量重生）',
        example: 'scum.EncounterCharacterRespawnBatchSizeMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterCharacterAggressiveSpawnChanceOverride': {
        description: '攻擊性敵人強制機率 - 強制產生主動攻擊敵人的機率（-1 = 系統預設）',
        example: 'scum.EncounterCharacterAggressiveSpawnChanceOverride=-1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterCharacterAINoiseResponseRadiusMultiplier': {
        description: 'AI 聲音感應距離倍率 - 敵人聽到聲音的範圍控制（例如開槍）',
        example: 'scum.EncounterCharacterAINoiseResponseRadiusMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterHordeGroupBaseCharacterAmountMultiplier': {
        description: 'Horde 群體基礎敵人數量倍率 - 控制群體遭遇時的初始敵人數量',
        example: 'scum.EncounterHordeGroupBaseCharacterAmountMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterHordeGroupExtraCharacterPerPlayerMultiplier': {
        description: 'Horde 群體每名玩家額外敵人數倍率 - 每增加一名玩家時，群體敵人數增加倍數',
        example: 'scum.EncounterHordeGroupExtraCharacterPerPlayerMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterHordeGroupExtraCharacterPlayerCapMultiplier': {
        description: 'Horde 群體玩家上限倍率 - 當玩家數增多時，群體遭遇最大敵人數上限倍率',
        example: 'scum.EncounterHordeGroupExtraCharacterPlayerCapMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterHordeBaseCharacterAmountMultiplier': {
        description: 'Horde 單群基礎敵人數量倍率 - 單一群體遭遇中的敵人基礎數量控制',
        example: 'scum.EncounterHordeBaseCharacterAmountMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterHordeExtraCharacterPerPlayerMultiplier': {
        description: 'Horde 每名玩家額外敵人數倍率 - 每名玩家共享增量影響群敵數量',
        example: 'scum.EncounterHordeExtraCharacterPerPlayerMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterHordeExtraCharacterPlayerCapMultiplier': {
        description: 'Horde 每名玩家上限倍率 - 控制群體遭遇敵人增加的上限',
        example: 'scum.EncounterHordeExtraCharacterPlayerCapMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterHordeActivationChanceMultiplier': {
        description: 'Horde 觸發機率倍率 - 提高遭遇群敵的事件機率',
        example: 'scum.EncounterHordeActivationChanceMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterHordeNoiseCheckCooldownMultiplier': {
        description: 'Horde 聲音感測冷卻倍率 - 音源觸發群敵響應間隔時間倍率',
        example: 'scum.EncounterHordeNoiseCheckCooldownMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterHordeSpawnDistanceMultiplier': {
        description: 'Horde 重生距離倍率 - 控制群敵生成距離玩家的範圍',
        example: 'scum.EncounterHordeSpawnDistanceMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterHordeGroupRefillTimeMultiplier': {
        description: 'Horde 群體重新補滿時間倍率 - 清空後多久會再次產生群體敵人',
        example: 'scum.EncounterHordeGroupRefillTimeMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterHordeShouldPlayActivationSound': {
        description: '群體遭遇啟動音效 - 是否在觸發群體敵人時播放警告音效（0 = 關閉，1 = 開啟）',
        example: 'scum.EncounterHordeShouldPlayActivationSound=1',
        type: 'number',
        category: '遭遇系統'
    },
    'scum.EncounterHordePuppetHordeActivationScreamOverrideChance': {
        description: '群體傀儡啟動尖叫機率 - 控制當群體事件觸發時，傀儡是否發出尖叫聲，-1 為預設系統值',
        example: 'scum.EncounterHordePuppetHordeActivationScreamOverrideChance=-1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterCanRemoveLowPriorityCharacters': {
        description: '可移除低優先角色 - 當資源吃緊時允許清除低優先等級的 NPC 或敵人 (0=否, 1=是)',
        example: 'scum.EncounterCanRemoveLowPriorityCharacters=1',
        type: 'number',
        category: '遭遇系統'
    },
    'scum.EncounterCanClampCharacterNumWhenOutOfResources': {
        description: '當資源不足時限制敵人數 - 啟用後會依伺服器效能動態壓縮敵人數量 (0=否, 1=是)',
        example: 'scum.EncounterCanClampCharacterNumWhenOutOfResources=1',
        type: 'number',
        category: '遭遇系統'
    },
    'scum.EncounterGlobalZoneCooldownMultiplier': {
        description: '區域冷卻倍率 - 控制特定區域內敵人重生或觸發事件的冷卻倍率',
        example: 'scum.EncounterGlobalZoneCooldownMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EncounterEnableSpawnPreventionAreaSpawnOnCharacterDeath': {
        description: '死亡後解除禁止重生區 - 若啟用，當角色死亡後，允許該區域重新啟用敵人重生 (0=否, 1=是)',
        example: 'scum.EncounterEnableSpawnPreventionAreaSpawnOnCharacterDeath=0',
        type: 'number',
        category: '遭遇系統'
    },
    'scum.PuppetWorldEncounterSpawnWeightMultiplier': {
        description: '傀儡敵人刷新權重倍率 - 控制世界中傀儡類敵人的刷新頻率權重',
        example: 'scum.PuppetWorldEncounterSpawnWeightMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.AnimalWorldEncounterSpawnWeightMultiplier': {
        description: '野生動物刷新權重倍率 - 控制世界中動物出現的頻率倍率',
        example: 'scum.AnimalWorldEncounterSpawnWeightMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.DropshipWorldEncounterSpawnWeightMultiplier': {
        description: '空投遭遇刷新權重倍率 - 控制空投活動觸發的事件刷新頻率',
        example: 'scum.DropshipWorldEncounterSpawnWeightMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EnableDropshipAbandonedBunkerEncounter': {
        description: '啟用空投荒廢地堡遭遇 - 是否啟用空投觸發的荒廢地堡戰鬥事件 (0=否, 1=是)',
        example: 'scum.EnableDropshipAbandonedBunkerEncounter=1',
        type: 'number',
        category: '遭遇系統'
    },
    'scum.DropshipAbandonedBunkerEncounterTriggerChance': {
        description: '空投地堡事件觸發機率 - 空投時觸發地堡事件的機率（-1 為預設）',
        example: 'scum.DropshipAbandonedBunkerEncounterTriggerChance=-1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.BaseBuildingEncounterTriggerChance': {
        description: '基地建造觸發遭遇機率 - 玩家建築時可能觸發敵人攻擊事件的機率',
        example: 'scum.BaseBuildingEncounterTriggerChance=0.100000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.BaseBuildingEncounterTriggerTimeMultiplier': {
        description: '基地觸發事件時間倍率 - 建造後多久可能觸發敵人事件的倍率控制',
        example: 'scum.BaseBuildingEncounterTriggerTimeMultiplier=1.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.EnableDropshipBaseBuildingEncounter': {
        description: '啟用空投觸發基地事件 - 啟用後，空投可能觸發建築區域遭遇戰 (0=否, 1=是)',
        example: 'scum.EnableDropshipBaseBuildingEncounter=1',
        type: 'number',
        category: '遭遇系統'
    },
    'scum.SpawnEncountersInThreatZonesIgnoringBaseBuilding': {
        description: '無視基地直接生成敵人 - 即使該區域有基地，仍允許敵人生成 (0=否, 1=是)',
        example: 'scum.SpawnEncountersInThreatZonesIgnoringBaseBuilding=0',
        type: 'number',
        category: '遭遇系統'
    },
    'scum.EnableEncounterManagerLowPlayerCountMode': {
        description: '啟用低人口遭遇模式 - 啟用後伺服器人數過低時將限制敵人生成 (0=否, 1=是)',
        example: 'scum.EnableEncounterManagerLowPlayerCountMode=1',
        type: 'number',
        category: '遭遇系統'
    },
    'scum.BaseBuildingEncounterMinNumElementsToStart': {
        description: '觸發基地事件所需最低建築數 - 建築項目數達到此數量才觸發敵人事件（-1 表示不限制）',
        example: 'scum.BaseBuildingEncounterMinNumElementsToStart=-1',
        type: 'number',
        category: '遭遇系統'
    },
    'scum.BaseBuildingEncounterMinNumElementsToEnd': {
        description: '結束基地事件所需剩餘建築數 - 當建築物破壞剩餘低於此數量，事件會結束',
        example: 'scum.BaseBuildingEncounterMinNumElementsToEnd=5',
        type: 'number',
        category: '遭遇系統'
    },
    'scum.BaseBuildingEncounterDamagePercentageIncreasePerSquadMember': {
        description: '小隊人數增加敵人傷害比 - 每多一人，敵人造成的額外傷害百分比',
        example: 'scum.BaseBuildingEncounterDamagePercentageIncreasePerSquadMember=0.100000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.BaseBuildingEncounterTimeToFullMinNumToEnd': {
        description: '敵人持續時間達滿時自動結束時間 - 當遭遇觸發到完整攻擊階段後，多少秒後自動結束',
        example: 'scum.BaseBuildingEncounterTimeToFullMinNumToEnd=3600.000000',
        type: 'float',
        category: '遭遇系統'
    },
    'scum.BaseBuildingEncounterMaximumMinToEndReduction': {
        description: '最大事件結束提前時間 - 控制最早可中止事件的最大提前時間',
        example: 'scum.BaseBuildingEncounterMaximumMinToEndReduction=1800.000000',
        type: 'float',
        category: '遭遇系統'
    },

    // 技能倍數設定
    'scum.ArcherySkillMultiplier': {
        description: '射箭技能倍數 - 射箭技能經驗獲得倍數',
        example: 'scum.ArcherySkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.AviationSkillMultiplier': {
        description: '航空技能倍數 - 航空技能經驗獲得倍數',
        example: 'scum.AviationSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.AwarenessSkillMultiplier': {
        description: '感知技能倍數 - 感知技能經驗獲得倍數',
        example: 'scum.AwarenessSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.BrawlingSkillMultiplier': {
        description: '格鬥技能倍數 - 格鬥技能經驗獲得倍數',
        example: 'scum.BrawlingSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.CamouflageSkillMultiplier': {
        description: '偽裝技能倍數 - 偽裝技能經驗獲得倍數',
        example: 'scum.CamouflageSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.CookingSkillMultiplier': {
        description: '烹飪技能倍數 - 烹飪技能經驗獲得倍數',
        example: 'scum.CookingSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.DemolitionSkillMultiplier': {
        description: '爆破技能倍數 - 爆破技能經驗獲得倍數',
        example: 'scum.DemolitionSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.DrivingSkillMultiplier': {
        description: '駕駛技能倍數 - 駕駛技能經驗獲得倍數',
        example: 'scum.DrivingSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.EnduranceSkillMultiplier': {
        description: '耐力技能倍數 - 耐力技能經驗獲得倍數',
        example: 'scum.EnduranceSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.EngineeringSkillMultiplier': {
        description: '工程技能倍數 - 工程技能經驗獲得倍數',
        example: 'scum.EngineeringSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.FarmingSkillMultiplier': {
        description: '農業技能倍數 - 農業技能經驗獲得倍數',
        example: 'scum.FarmingSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.HandgunSkillMultiplier': {
        description: '手槍技能倍數 - 手槍技能經驗獲得倍數',
        example: 'scum.HandgunSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.MedicalSkillMultiplier': {
        description: '醫療技能倍數 - 醫療技能經驗獲得倍數',
        example: 'scum.MedicalSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.MeleeWeaponsSkillMultiplier': {
        description: '近戰武器技能倍數 - 近戰武器技能經驗獲得倍數',
        example: 'scum.MeleeWeaponsSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.MotorcycleSkillMultiplier': {
        description: '摩托車技能倍數 - 摩托車技能經驗獲得倍數',
        example: 'scum.MotorcycleSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.RiflesSkillMultiplier': {
        description: '步槍技能倍數 - 步槍技能經驗獲得倍數',
        example: 'scum.RiflesSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.RunningSkillMultiplier': {
        description: '跑步技能倍數 - 跑步技能經驗獲得倍數',
        example: 'scum.RunningSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.SnipingSkillMultiplier': {
        description: '狙擊技能倍數 - 狙擊技能經驗獲得倍數',
        example: 'scum.SnipingSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.StealthSkillMultiplier': {
        description: '潛行技能倍數 - 潛行技能經驗獲得倍數',
        example: 'scum.StealthSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.SurvivalSkillMultiplier': {
        description: '生存技能倍數 - 生存技能經驗獲得倍數',
        example: 'scum.SurvivalSkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },
    'scum.ThieverySkillMultiplier': {
        description: '盜竊技能倍數 - 盜竊技能經驗獲得倍數',
        example: 'scum.ThieverySkillMultiplier=1.000000',
        type: 'float',
        category: '技能設定'
    },

    // 突襲保護系統設定
    'scum.RaidProtectionType': {
        description: '突襲保護模式類型 - 決定突襲保護的類型（如離線保護、時間保護等）',
        example: 'scum.RaidProtectionType=0',
        type: 'number',
        category: '突襲保護'
    },
    'scum.RaidProtectionEnableLog': {
        description: '紀錄突襲保護日誌 - 是否將保護啟用／結束紀錄到日誌中 (0=否, 1=是)',
        example: 'scum.RaidProtectionEnableLog=1',
        type: 'number',
        category: '突襲保護'
    },
    'scum.RaidProtectionFlagSpecificChangeSettingCooldown': {
        description: '旗幟保護變更冷卻時間 - 玩家更改保護模式後需等待多久才能再次修改',
        example: 'scum.RaidProtectionFlagSpecificChangeSettingCooldown=24:00:00',
        type: 'string',
        category: '突襲保護'
    },
    'scum.RaidProtectionFlagSpecificChangeSettingPrice': {
        description: '更改保護費用 - 修改保護選項時需花費的金額（如 10g）',
        example: 'scum.RaidProtectionFlagSpecificChangeSettingPrice=10.000000',
        type: 'float',
        category: '突襲保護'
    },
    'scum.RaidProtectionFlagSpecificMaxProtectionTime': {
        description: '每面旗可保護最大時間 - 限定單面旗的保護持續最長多久（例如 8 小時）',
        example: 'scum.RaidProtectionFlagSpecificMaxProtectionTime=08:00:00',
        type: 'string',
        category: '突襲保護'
    },
    'scum.RaidProtectionOfflineProtectionStartDelay': {
        description: '離線後啟動保護延遲 - 玩家離線多久後，突襲保護才會啟用（如 30 分鐘）',
        example: 'scum.RaidProtectionOfflineProtectionStartDelay=00:30:00',
        type: 'string',
        category: '突襲保護'
    },
    'scum.RaidProtectionOfflineMaxProtectionTime': {
        description: '離線保護最長時間 - 玩家離線後突襲保護的最長啟用時長（- 表示不限制）',
        example: 'scum.RaidProtectionOfflineMaxProtectionTime=-1',
        type: 'string',
        category: '突襲保護'
    },
    'scum.RaidProtectionGlobalShouldShowRaidTimesMessage': {
        description: '顯示可突襲時間訊息 - 是否讓玩家知道保護何時開始／結束 (0=否, 1=是)',
        example: 'scum.RaidProtectionGlobalShouldShowRaidTimesMessage=1',
        type: 'number',
        category: '突襲保護'
    },
    'scum.RaidProtectionGlobalShouldShowRaidAnnouncementMessage': {
        description: '開始突襲是否廣播 - 在保護結束開放突襲時是否顯示提示訊息 (0=否, 1=是)',
        example: 'scum.RaidProtectionGlobalShouldShowRaidAnnouncementMessage=1',
        type: 'number',
        category: '突襲保護'
    },
    'scum.RaidProtectionGlobalShouldShowRaidStartEndMessages': {
        description: '突襲開始／結束顯示通知 - 突襲開始或結束時是否通知所有玩家 (0=否, 1=是)',
        example: 'scum.RaidProtectionGlobalShouldShowRaidStartEndMessages=1',
        type: 'number',
        category: '突襲保護'
    },

    // 資源管理系統設定
    'scum.WaterPricePerUnitMultiplier': {
        description: '單位水資源價格倍率 - 購買水的成本倍率',
        example: 'scum.WaterPricePerUnitMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.WaterPeriodicInitialAmountMultiplier': {
        description: '定期補水初始量倍率 - 裝置建成後的初始水量',
        example: 'scum.WaterPeriodicInitialAmountMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.WaterPeriodicMaxAmountMultiplier': {
        description: '水資源儲存上限倍率 - 水源最多可儲存的容量倍率',
        example: 'scum.WaterPeriodicMaxAmountMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.WaterPeriodicReplenishAmountMultiplier': {
        description: '定時補水數量倍率 - 每次系統補水時補充的水量倍率',
        example: 'scum.WaterPeriodicReplenishAmountMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.WaterPeriodicReplenishIntervalMultiplier': {
        description: '補水時間間隔倍率 - 系統多久補一次水的時間倍率',
        example: 'scum.WaterPeriodicReplenishIntervalMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.WaterProximityReplenishAmountMultiplier': {
        description: '鄰近觸發補水量倍率 - 玩家靠近時自動補水的數量倍率',
        example: 'scum.WaterProximityReplenishAmountMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.WaterProximityReplenishChanceMultiplier': {
        description: '鄰近補水機率倍率 - 玩家靠近時會不會補水的機率倍率',
        example: 'scum.WaterProximityReplenishChanceMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.WaterProximityReplenishTimeoutMultiplier': {
        description: '鄰近補水冷卻倍率 - 補完水之後要等多久才能再次補水',
        example: 'scum.WaterProximityReplenishTimeoutMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.GasolinePricePerUnitMultiplier': {
        description: '汽油價格倍率 - 購買汽油的成本倍率',
        example: 'scum.GasolinePricePerUnitMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.GasolinePeriodicInitialAmountMultiplier': {
        description: '汽油初始量倍率 - 汽油裝置建成後的初始汽油量',
        example: 'scum.GasolinePeriodicInitialAmountMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.GasolinePeriodicMaxAmountMultiplier': {
        description: '汽油儲存上限倍率 - 汽油最多可儲存的容量倍率',
        example: 'scum.GasolinePeriodicMaxAmountMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.PropanePricePerUnitMultiplier': {
        description: '瓦斯價格倍率 - 購買瓦斯的成本倍率',
        example: 'scum.PropanePricePerUnitMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.PropanePeriodicInitialAmountMultiplier': {
        description: '瓦斯初始量倍率 - 瓦斯裝置建成後的初始瓦斯量',
        example: 'scum.PropanePeriodicInitialAmountMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.PropanePeriodicMaxAmountMultiplier': {
        description: '瓦斯儲存上限倍率 - 瓦斯最多可儲存的容量倍率',
        example: 'scum.PropanePeriodicMaxAmountMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.GasolinePeriodicReplenishAmountMultiplier': {
        description: '定時汽油補充量倍率 - 系統補充的汽油量倍率',
        example: 'scum.GasolinePeriodicReplenishAmountMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.GasolinePeriodicReplenishIntervalMultiplier': {
        description: '汽油補充間隔倍率 - 例如補一次油要幾分鐘',
        example: 'scum.GasolinePeriodicReplenishIntervalMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.GasolineProximityReplenishAmountMultiplier': {
        description: '靠近觸發補油量 - 玩家靠近後自動補油的量倍率',
        example: 'scum.GasolineProximityReplenishAmountMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.GasolineProximityReplenishChanceMultiplier': {
        description: '靠近觸發補油機率倍率 - 會不會補的機率倍率',
        example: 'scum.GasolineProximityReplenishChanceMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.GasolineProximityReplenishTimeoutMultiplier': {
        description: '靠近補油後冷卻時間倍率 - 下一次可補的時間倍率',
        example: 'scum.GasolineProximityReplenishTimeoutMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.PropanePeriodicReplenishAmountMultiplier': {
        description: '定時瓦斯補充量倍率 - 系統補充的瓦斯量倍率',
        example: 'scum.PropanePeriodicReplenishAmountMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.PropanePeriodicReplenishIntervalMultiplier': {
        description: '瓦斯補充間隔倍率 - 例如補一次瓦斯要幾分鐘',
        example: 'scum.PropanePeriodicReplenishIntervalMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.PropaneProximityReplenishAmountMultiplier': {
        description: '靠近觸發補瓦斯量 - 玩家靠近後自動補瓦斯的量倍率',
        example: 'scum.PropaneProximityReplenishAmountMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.PropaneProximityReplenishChanceMultiplier': {
        description: '靠近觸發補瓦斯機率倍率 - 會不會補的機率倍率',
        example: 'scum.PropaneProximityReplenishChanceMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },
    'scum.PropaneProximityReplenishTimeoutMultiplier': {
        description: '靠近補瓦斯後冷卻時間倍率 - 下一次可補的時間倍率',
        example: 'scum.PropaneProximityReplenishTimeoutMultiplier=1.000000',
        type: 'float',
        category: '資源管理'
    },

    // 掉落物系統設定
    'scum.SpawnerProbabilityMultiplier': {
        description: '掉落物刷新機率倍率 - 控制整體物品掉落的頻率',
        example: 'scum.SpawnerProbabilityMultiplier=1.000000',
        type: 'float',
        category: '掉落物系統'
    },
    'scum.ExamineSpawnerProbabilityMultiplier': {
        description: '玩家互動掉落倍率 - 玩家開箱等互動行為觸發掉落的機率倍率',
        example: 'scum.ExamineSpawnerProbabilityMultiplier=1.000000',
        type: 'float',
        category: '掉落物系統'
    },
    'scum.ExamineSpawnerExpirationTimeMultiplier': {
        description: '玩家互動生成物品存活時間倍率 - 玩家開啟後產生物品能存在多久',
        example: 'scum.ExamineSpawnerExpirationTimeMultiplier=1.000000',
        type: 'float',
        category: '掉落物系統'
    },
    'scum.SpawnerExpirationTimeMultiplier': {
        description: '掉落物自動消失時間倍率 - 沒人撿的物品多久後會自動消失',
        example: 'scum.SpawnerExpirationTimeMultiplier=1.000000',
        type: 'float',
        category: '掉落物系統'
    },

    // 物品冷卻系統設定
    'scum.EnableItemCooldownGroups': {
        description: '啟用物品冷卻群組 - 控制某些物品共享冷卻機制（例如某些裝置） (0=否, 1=是)',
        example: 'scum.EnableItemCooldownGroups=1',
        type: 'number',
        category: '物品冷卻'
    },
    'scum.ItemCooldownGroupsDurationMultiplier': {
        description: '群組冷卻時間倍率 - 調整群組內所有物品的冷卻時間長短',
        example: 'scum.ItemCooldownGroupsDurationMultiplier=1.000000',
        type: 'float',
        category: '物品冷卻'
    },

    // 小隊系統設定
    'scum.SquadMemberCountAtIntLevel1': {
        description: '智力1級小隊人數上限 - 玩家智力等級1時可加入的小隊最大人數',
        example: 'scum.SquadMemberCountAtIntLevel1=2',
        type: 'number',
        category: '小隊系統'
    },
    'scum.SquadMemberCountAtIntLevel2': {
        description: '智力2級小隊人數上限 - 玩家智力等級2時可加入的小隊最大人數',
        example: 'scum.SquadMemberCountAtIntLevel2=3',
        type: 'number',
        category: '小隊系統'
    },
    'scum.SquadMemberCountAtIntLevel3': {
        description: '智力3級小隊人數上限 - 玩家智力等級3時可加入的小隊最大人數',
        example: 'scum.SquadMemberCountAtIntLevel3=4',
        type: 'number',
        category: '小隊系統'
    },
    'scum.SquadMemberCountAtIntLevel4': {
        description: '智力4級小隊人數上限 - 玩家智力等級4時可加入的小隊最大人數',
        example: 'scum.SquadMemberCountAtIntLevel4=5',
        type: 'number',
        category: '小隊系統'
    },
    'scum.SquadMemberCountAtIntLevel5': {
        description: '智力5級小隊人數上限 - 玩家智力等級5時可加入的小隊最大人數',
        example: 'scum.SquadMemberCountAtIntLevel5=6',
        type: 'number',
        category: '小隊系統'
    },
    'scum.SquadMemberCountLimitForPunishment': {
        description: '小隊懲罰門檻 - 小隊人數超過此數後會受到處罰（例如 Fame 損失）',
        example: 'scum.SquadMemberCountLimitForPunishment=8',
        type: 'number',
        category: '小隊系統'
    },
    'scum.RTSquadProbationDuration': {
        description: '小隊轉隊冷卻期（天） - 玩家離開或解散小隊後要等多久才能加入其他隊伍',
        example: 'scum.RTSquadProbationDuration=7',
        type: 'number',
        category: '小隊系統'
    },
    'scum.SquadMoneyPenaltyPerPrevSquadMember': {
        description: '小隊轉移金錢處罰 - 玩家重組或離隊後會損失多少金錢',
        example: 'scum.SquadMoneyPenaltyPerPrevSquadMember=100.000000',
        type: 'float',
        category: '小隊系統'
    },
    'scum.SquadFamePointsPenaltyPerPrevSquadMember': {
        description: '小隊轉移名聲懲罰 - 玩家轉移隊伍時會損失多少 Fame 點數',
        example: 'scum.SquadFamePointsPenaltyPerPrevSquadMember=50.000000',
        type: 'float',
        category: '小隊系統'
    },
    'scum.EnableSquadMemberNameWidget': {
        description: '顯示隊員名稱小工具 - 是否啟用顯示隊友名稱的 UI 元件（例如上方浮標） (0=否, 1=是)',
        example: 'scum.EnableSquadMemberNameWidget=1',
        type: 'number',
        category: '小隊系統'
    },

    // 農業系統設定
    'scum.PlantHarvestExamineTimeMultiplier': {
        description: '採收調查時間倍率 - 採集或觀察植物所需時間倍率',
        example: 'scum.PlantHarvestExamineTimeMultiplier=1.000000',
        type: 'float',
        category: '農業系統'
    },
    'scum.FirstPlantHarvestAdditionalChance': {
        description: '初次收成額外獲得機率 - 第一次種植成功時有額外獲得機會',
        example: 'scum.FirstPlantHarvestAdditionalChance=0.100000',
        type: 'float',
        category: '農業系統'
    },

    // 任務系統設定
    'scum.QuestsEnabled': {
        description: '啟用任務系統 - 是否啟用每日／週期性任務功能 (0=否, 1=是)',
        example: 'scum.QuestsEnabled=1',
        type: 'number',
        category: '任務系統'
    },
    'scum.QuestsGlobalCycleDuration': {
        description: '任務週期長度 - 任務刷新週期（例如 23:59:59 表示每日）',
        example: 'scum.QuestsGlobalCycleDuration=23:59:59',
        type: 'string',
        category: '任務系統'
    },
    'scum.MaxQuestsPerCyclePerTrader': {
        description: '每名商人每日任務數 - 商人每個週期可提供的任務數量',
        example: 'scum.MaxQuestsPerCyclePerTrader=5',
        type: 'number',
        category: '任務系統'
    },
    'scum.MaxSimultaneousQuestsPerTrader': {
        description: '玩家同時接取任務上限 - 控制玩家一次可接幾個任務',
        example: 'scum.MaxSimultaneousQuestsPerTrader=3',
        type: 'number',
        category: '任務系統'
    },
    'scum.QuestsTraderRefillCooldown': {
        description: '商人任務刷新間隔 - 商人任務內容更新的冷卻時間',
        example: 'scum.QuestsTraderRefillCooldown=01:00:00',
        type: 'string',
        category: '任務系統'
    },
    'scum.QuestsPhoneRefillCooldown': {
        description: '電話任務刷新冷卻 - 用手機接的任務刷新間隔',
        example: 'scum.QuestsPhoneRefillCooldown=02:00:00',
        type: 'string',
        category: '任務系統'
    },
    'scum.QuestsNoticeBoardRefillCooldown': {
        description: '公告欄任務刷新冷卻 - 公告板任務多久刷新一次',
        example: 'scum.QuestsNoticeBoardRefillCooldown=04:00:00',
        type: 'string',
        category: '任務系統'
    },
    'scum.QuestRequirementsBlockTradeableItems': {
        description: '任務目標物禁止交易 - 任務指定道具是否禁止被交易 (0=否, 1=是)',
        example: 'scum.QuestRequirementsBlockTradeableItems=1',
        type: 'number',
        category: '任務系統'
    },

    // 砲塔系統設定
    'scum.TurretsAttackPrisoners': {
        description: '砲塔攻擊囚犯 - 是否會對玩家角色進行攻擊 (0=否, 1=是)',
        example: 'scum.TurretsAttackPrisoners=1',
        type: 'number',
        category: '砲塔系統'
    },
    'scum.TurretsAttackPuppets': {
        description: '砲塔攻擊傀儡 - 是否能攻擊 AI 殭屍／傀儡 (0=否, 1=是)',
        example: 'scum.TurretsAttackPuppets=1',
        type: 'number',
        category: '砲塔系統'
    },
    'scum.TurretsAttackVehicles': {
        description: '砲塔攻擊載具 - 是否能自動射擊進入範圍內的車輛 (0=否, 1=是)',
        example: 'scum.TurretsAttackVehicles=0',
        type: 'number',
        category: '砲塔系統'
    },
    'scum.TurretsAttackSentries': {
        description: '砲塔攻擊哨塔 - 是否會攻擊哨塔（通常設為 0） (0=否, 1=是)',
        example: 'scum.TurretsAttackSentries=0',
        type: 'number',
        category: '砲塔系統'
    },
    'scum.TurretsAttackAnimals': {
        description: '砲塔攻擊野生動物 - 會不會攻擊如鹿、狼等自然動物 (0=否, 1=是)',
        example: 'scum.TurretsAttackAnimals=0',
        type: 'number',
        category: '砲塔系統'
    },
    'scum.TurretsAttackArmedNPCs': {
        description: '砲塔攻擊武裝 NPC - 是否會主動攻擊武器裝備的 NPC (0=否, 1=是)',
        example: 'scum.TurretsAttackArmedNPCs=1',
        type: 'number',
        category: '砲塔系統'
    },

    // 進階遊戲設定
    'scum.StaminaDrainOnClimbMultiplier': {
        description: '攀爬體力消耗倍率 - 玩家攀爬時耗費體力的倍率',
        example: 'scum.StaminaDrainOnClimbMultiplier=1.000000',
        type: 'float',
        category: '遊戲功能'
    },
    'scum.MaintainItemsExpirationTime': {
        description: '保管物品保存時間 - 玩家未登入期間，儲存箱中物品的保存天數',
        example: 'scum.MaintainItemsExpirationTime=30',
        type: 'number',
        category: '遊戲功能'
    },
    'scum.KillboxDefuseFailureBonus': {
        description: 'Killbox 失敗額外獎勵 - 拆彈失敗後，仍可能額外獲得部分獎勵的比例',
        example: 'scum.KillboxDefuseFailureBonus=0.100000',
        type: 'float',
        category: '遊戲功能'
    },
    'scum.BedrollVisibilityTimer': {
        description: '睡袋可見時間 - 顯示玩家睡袋的位置持續時間（秒）',
        example: 'scum.BedrollVisibilityTimer=300.000000',
        type: 'float',
        category: '遊戲功能'
    },
    'scum.EnableBCULocking': {
        description: '啟用 BCU 鎖定 - 是否啟用內臟／BCU 裝置鎖定機制（防止拆卸） (0=否, 1=是)',
        example: 'scum.EnableBCULocking=1',
        type: 'number',
        category: '遊戲功能'
    },

    // 玩家管理進階設定
    'scum.NameChangeCooldown': {
        description: '更名冷卻時間 - 玩家多久才能再修改名稱（小時）',
        example: 'scum.NameChangeCooldown=168.000000',
        type: 'float',
        category: '玩家設定'
    },
    'scum.NameChangeCost': {
        description: '更名費用 - 玩家每次改名需消耗多少 Fame 點數',
        example: 'scum.NameChangeCost=1000.000000',
        type: 'float',
        category: '玩家設定'
    },
    'scum.EnableNewPlayerProtection': {
        description: '新手保護開關 - 啟用後，新玩家會獲得一段時間的 PvP 保護 (0=否, 1=是)',
        example: 'scum.EnableNewPlayerProtection=1',
        type: 'number',
        category: '玩家設定'
    },
    'scum.NewPlayerProtectionDuration': {
        description: '新手保護時間 - PvP 保護時間長度（分鐘）',
        example: 'scum.NewPlayerProtectionDuration=60.000000',
        type: 'float',
        category: '玩家設定'
    },
    'scum.AllowAutomaticParachuteOpening': {
        description: '自動開傘 - 玩家跳傘時是否會自動展開降落傘 (0=否, 1=是)',
        example: 'scum.AllowAutomaticParachuteOpening=1',
        type: 'number',
        category: '玩家設定'
    },
    'scum.CommitSuicideInitialTime': {
        description: '自殺準備時間 - 玩家選擇自殺後需等待的時間（秒）',
        example: 'scum.CommitSuicideInitialTime=10.000000',
        type: 'float',
        category: '玩家設定'
    },
    'scum.CommitSuicideCooldown': {
        description: '自殺冷卻時間 - 玩家每次自殺後需等待的冷卻時間（秒）',
        example: 'scum.CommitSuicideCooldown=60.000000',
        type: 'float',
        category: '玩家設定'
    },
    'scum.CommitSuicideCooldownResetMultiplier': {
        description: '自殺冷卻重置倍率 - 控制自殺冷卻恢復的速度倍率（通常不調整）',
        example: 'scum.CommitSuicideCooldownResetMultiplier=1.250000',
        type: 'float',
        category: '玩家設定'
    },
    'scum.MaximumBaseProximityWhenSpawning': {
        description: '重生點與基地的最小距離 - 限制玩家重生點不能靠近敵人基地（單位為公尺）',
        example: 'scum.MaximumBaseProximityWhenSpawning=500.000000',
        type: 'float',
        category: '玩家設定'
    },
    'scum.PermadeathThreshold': {
        description: '永久死亡門檻 - Fame 值低於此數值後死亡將會造成永久死亡（重置角色）',
        example: 'scum.PermadeathThreshold=-1000.000000',
        type: 'float',
        category: '玩家設定'
    },

    // UI 介面設定
    'scum.HideQuickAccessBar': {
        description: '隱藏快速物品欄 - 是否隱藏螢幕下方的快速欄（UI） (0=否, 1=是)',
        example: 'scum.HideQuickAccessBar=0',
        type: 'number',
        category: 'UI介面'
    },
    'scum.HideLifeIndicators': {
        description: '隱藏生命條 - 是否隱藏血量／體溫／水分等狀態指標 (0=否, 1=是)',
        example: 'scum.HideLifeIndicators=0',
        type: 'number',
        category: 'UI介面'
    },

    // 系統功能設定
    'scum.EnableDeenaOnServer': {
        description: '啟用 D.E.E.N.A - 是否啟用伺服器內建 AI 助理 (0=否, 1=是)',
        example: 'scum.EnableDeenaOnServer=1',
        type: 'number',
        category: '系統設定'
    },
    'scum.EnableDigitalDeluxeStarterPack': {
        description: '啟用豪華版禮包 - 是否開放 Digital Deluxe 版的啟始物資 (0=否, 1=是)',
        example: 'scum.EnableDigitalDeluxeStarterPack=0',
        type: 'number',
        category: '系統設定'
    }
};

// 範例設定檔 (新版格式) - 包含所有388個設定項目
const SAMPLE_CONFIG = `# SCUM 伺服器設定檔 - 完整範例
# 包含所有388個設定項目
# 生成時間: ${new Date().toLocaleString('zh-TW')}

[General]
# 基本設定
scum.ServerName=我的SCUM伺服器
scum.ServerDescription=歡迎來到我的SCUM伺服器
scum.ServerPassword=
scum.MaxPlayers=64
scum.ServerBannerUrl=
scum.ServerPlaystyle=PVE
scum.WelcomeMessage=歡迎來到我們的SCUM伺服器
scum.MessageOfTheDay=這是今日訊息
scum.MessageOfTheDayCooldown=10.000000

# 網路設定
scum.MaxPing=200.000000
scum.MinServerTickRate=5
scum.MaxServerTickRate=30
scum.MasterServerUpdateSendInterval=60.000000
scum.MasterServerIsLocalTest=0

# 玩家設定
scum.LogoutTimer=60.000000
scum.LogoutTimerWhileCaptured=120.000000
scum.LogoutTimerInBunker=30000.000000
scum.DeleteInactiveUsers=0
scum.DaysSinceLastLoginToBecomeInactive=30
scum.DeleteBannedUsers=0
scum.NameChangeCooldown=168.000000
scum.NameChangeCost=1000.000000
scum.EnableNewPlayerProtection=1
scum.NewPlayerProtectionDuration=60.000000
scum.AllowAutomaticParachuteOpening=1
scum.CommitSuicideInitialTime=10.000000
scum.CommitSuicideCooldown=60.000000
scum.CommitSuicideCooldownResetMultiplier=1.250000
scum.MaximumBaseProximityWhenSpawning=500.000000
scum.PermadeathThreshold=-1000.000000

# 遊戲設定
scum.AllowFirstPerson=1
scum.AllowThirdPerson=1
scum.AllowCrosshair=1
scum.AllowVoting=1
scum.AllowMapScreen=1
scum.AllowKillClaiming=1
scum.AllowComa=1
scum.AllowMinesAndTraps=1
scum.AllowSkillGainInSafeZones=0
scum.AllowEvents=1
scum.RustyLocksLogging=1
scum.HideKillNotification=0
scum.DisableTimedGifts=0
scum.UseMapBaseBuildingRestriction=0
scum.DisableBaseBuilding=0
scum.VotingDuration=60.000000
scum.PlayerMinimalVotingInterest=0.500000
scum.PlayerPositiveVotePercentage=0.500000
scum.LogSuicides=1
scum.EnableSpawnOnGround=0

# 聊天設定
scum.AllowGlobalChat=1
scum.AllowLocalChat=1
scum.AllowSquadChat=1
scum.AllowAdminChat=1
scum.LimitGlobalChat=0

[World]
# 世界設定
scum.StartTimeOfDay=08:00:00
scum.TimeOfDaySpeed=3.840000
scum.NighttimeDarkness=0.100000
scum.SunriseTime=06:00:00
scum.SunsetTime=21:00:00

# 生物設定
scum.MaxAllowedBirds=15
scum.MaxAllowedCharacters=-1
scum.MaxAllowedPuppets=-1
scum.MaxAllowedAnimals=-1
scum.MaxAllowedDrones=10
scum.DisableSentrySpawning=0
scum.EnableSentryRespawning=1
scum.DisableSuicidePuppetSpawning=0
scum.PuppetsCanOpenDoors=1
scum.PuppetsCanVaultWindows=1
scum.PuppetHealthMultiplier=1.000000

# 動物血量設定
scum.BoarMaxHealthMultiplier=1.000000
scum.ChickenMaxHealthMultiplier=1.000000
scum.DeerMaxHealthMultiplier=1.000000
scum.DonkeyMaxHealthMultiplier=1.000000
scum.GoatMaxHealthMultiplier=1.000000
scum.HorseMaxHealthMultiplier=1.000000
scum.RabbitMaxHealthMultiplier=1.000000
scum.WolfMaxHealthMultiplier=1.000000
scum.BearMaxHealthMultiplier=1.000000

[Vehicles]
# 載具設定
scum.FuelDrainFromEngineMultiplier=1.000000
scum.BatteryDrainFromEngineMultiplier=1.000000
scum.MaximumTimeOfVehicleInactivity=240:00:00
scum.BatteryDrainFromDevicesMultiplier=1.000000
scum.BatteryDrainFromInactivityMultiplier=1.000000
scum.BatteryChargeWithAlternatorMultiplier=1.000000
scum.BatteryChargeWithDynamoMultiplier=1.000000
scum.MaximumTimeForVehiclesInForbiddenZones=24:00:00
scum.LogVehicleDestroyed=1

# 載具數量控制
scum.KingletDusterMaxAmount=5
scum.KingletDusterMaxFunctionalAmount=3
scum.KingletDusterMinPurchasedAmount=1
scum.DirtbikeMaxAmount=10
scum.DirtbikeMaxFunctionalAmount=8
scum.DirtbikeMinPurchasedAmount=2
scum.LaikaMaxAmount=8
scum.LaikaMaxFunctionalAmount=6
scum.LaikaMinPurchasedAmount=1
scum.MotorboatMaxAmount=6
scum.MotorboatMaxFunctionalAmount=4
scum.MotorboatMinPurchasedAmount=1
scum.WheelbarrowMaxAmount=20
scum.WheelbarrowMaxFunctionalAmount=15
scum.WheelbarrowMinPurchasedAmount=3
scum.WolfswagenMaxAmount=8
scum.WolfswagenMaxFunctionalAmount=6
scum.WolfswagenMinPurchasedAmount=1
scum.BicycleMaxAmount=25
scum.BicycleMaxFunctionalAmount=20
scum.BicycleMinPurchasedAmount=5
scum.RagerMaxAmount=15
scum.RagerMaxFunctionalAmount=12
scum.RagerMinPurchasedAmount=3
scum.CruiserMaxAmount=6
scum.CruiserMaxFunctionalAmount=4
scum.CruiserMinPurchasedAmount=1
scum.RisMaxAmount=12
scum.RisMaxFunctionalAmount=10
scum.RisMinPurchasedAmount=2
scum.SUPMaxAmount=15
scum.SUPMaxFunctionalAmount=12
scum.SUPMinPurchasedAmount=3
scum.KingletMarinerMaxAmount=3
scum.KingletMarinerMaxFunctionalAmount=2
scum.KingletMarinerMinPurchasedAmount=1
scum.TractorMaxAmount=8
scum.TractorMaxFunctionalAmount=6
scum.TractorMinPurchasedAmount=1

[Damage]
# 傷害設定
scum.HumanToHumanDamageMultiplier=1.000000
scum.SentryDamageMultiplier=1.000000
scum.ZombieDamageMultiplier=1.000000
scum.DropshipHealthMultiplier=1.000000
scum.SentryHealthMultiplier=1.000000
scum.BaseBuildingAttackerSentryHealthMultiplier=1.000000
scum.ArmedNPCDifficultyLevel=1
scum.ProbabilityForArmedNPCToDropItemFromHandsWhenSearched=0.500000

# 詳細傷害設定
scum.HumanToHumanArmedMeleeDamageMultiplier=1.000000
scum.HumanToHumanUnarmedMeleeDamageMultiplier=1.000000
scum.HumanToHumanThrowingDamageMultiplier=1.000000
scum.SentryRailgunDamageMultiplier=1.000000
scum.SentryGrenadeDamageMultiplier=1.000000
scum.BaseBuildingAttackerSentryDamageMultiplier=1.000000
scum.BaseBuildingAttackerSentryRailgunDamageMultiplier=1.000000
scum.BaseBuildingAttackerSentryGrenadeDamageMultiplier=1.000000
scum.SentryBaseBuildingDamageMultiplier=1.000000
scum.DropshipDamageMultiplier=1.000000
scum.DropshipRailgunDamageMultiplier=1.000000
scum.DropshipBaseBuildingElementsDamageMultiplier=1.000000

# 物品管理
scum.ItemDecayDamageMultiplier=1.000000
scum.FoodDecayDamageMultiplier=1.000000
scum.WeaponDecayDamageOnFiring=1.000000
scum.LockProtectionDamageMultiplier=1.000000
scum.ItemVirtualizationRelevancyUpdatePeriod=5.000000
scum.ItemVirtualizationEventProcessingTimeBudget=10.000000
scum.ItemVirtualizationVisitorDistanceTravelledForUpdate=100.000000
scum.ItemVirtualizationVisitorBounds=1000.000000
scum.VirtualizedItemBounds=2000.000000
scum.MaximumTimeForChestsInForbiddenZones=24:00:00
scum.LogChestOwnership=1

# 建築設定
scum.FlagOvertakeDuration=168.000000
scum.MaximumAmountOfElementsPerFlag=100
scum.ExtraElementsPerFlagForAdditionalSquadMember=10
scum.MaximumNumberOfExpandedElementsPerFlag=50
scum.AllowMultipleFlagsPerPlayer=0
scum.AllowFlagPlacementOnBBElements=0
scum.ChestAcquisitionDuration=24:00:00
scum.WeaponRackMaxAmountPerFlagArea=10
scum.WeaponRackStartDecayingIfFlagAreaHasMoreThan=8
scum.WallWeaponRackMaxAmountPerFlagArea=5
scum.WallWeaponRackStartDecayingIfFlagAreaHasMoreThan=4
scum.WellMaxAmountPerFlagArea=3
scum.WellStartDecayingIfFlagAreaHasMoreThan=2
scum.TurretMaxAmountPerFlagArea=2
scum.TurretStartDecayingIfFlagAreaHasMoreThan=1
scum.GardenMaxAmountPerFlagArea=5
scum.AllowFloorPlacementOnHalfAndLowWalls=1
scum.AllowWallPlacementOnHalfAndLowWalls=1

# 地堡系統
scum.AbandonedBunkerCommotionThreshold=100.000000
scum.AbandonedBunkerCommotionThresholdPerPlayerExtra=50.000000
scum.AbandonedBunkerEnemyActivationThreshold=75.000000
scum.AbandonedBunkerEnemyActivationThresholdPerPlayerExtra=25.000000
scum.AbandonedBunkerResetArmoryLockersOnActivationOnly=1

# 地圖設定
scum.ShouldDestroyEntitiesOutsideMapLimitsOnRestart=1
scum.EnableLockedLootContainers=1
scum.CustomMapEnabled=0
scum.CustomMapCenterXCoordinate=0.000000
scum.CustomMapCenterYCoordinate=0.000000
scum.CustomMapWidth=10.000000
scum.CustomMapHeight=10.000000
scum.DoorLockability.Garage=1

# 空投系統
scum.CargoDropCooldownMinimum=1800.000000
scum.CargoDropCooldownMaximum=3600.000000
scum.CargoDropFallDelay=30.000000
scum.CargoDropFallDuration=60.000000
scum.CargoDropSelfdestructTime=1800.000000
scum.CargoDropZombieEncounterWeightMultiplier=1.000000
scum.CargoDropDropshipEncounterWeightMultiplier=1.000000

# 狩獵系統
scum.MaxAllowedHunts=5
scum.HuntTriggerChanceOverride_ContinentalForest=-1.000000
scum.HuntTriggerChanceOverride_ContinentalMeadow=-1.000000
scum.HuntTriggerChanceOverride_Mediterranean=-1.000000
scum.HuntTriggerChanceOverride_Mountain=-1.000000
scum.HuntTriggerChanceOverride_Urban=-1.000000
scum.HuntTriggerChanceOverride_Village=-1.000000
scum.HuntFailureTime=3600.000000
scum.HuntFailureDistance=1000.000000

# 鑰匙卡系統
scum.MaxAllowedKillboxKeycards=10
scum.MaxAllowedKillboxKeycards_PoliceStation=5
scum.MaxAllowedKillboxKeycards_RadiationZone=3
scum.AbandonedBunkerMaxSimultaneouslyActive=3
scum.AbandonedBunkerActiveDurationHours=24.000000
scum.AbandonedBunkerKeyCardActiveDurationHours=2.000000
scum.SecretBunkerKeyCardActiveDurationHours=4.000000

# 重生系統
scum.AllowSectorRespawn=1
scum.AllowShelterRespawn=1
scum.AllowSquadmateRespawn=1
scum.RandomRespawnPrice=0.000000
scum.SectorRespawnPrice=100.000000
scum.ShelterRespawnPrice=50.000000
scum.SquadRespawnPrice=25.000000
scum.RandomRespawnInitialTime=30.000000
scum.SectorRespawnInitialTime=60.000000
scum.ShelterRespawnInitialTime=45.000000
scum.SquadRespawnInitialTime=30.000000
scum.RandomRespawnCooldown=300.000000
scum.SectorRespawnCooldown=600.000000
scum.ShelterRespawnCooldown=450.000000
scum.SquadRespawnCooldown=300.000000
scum.RandomCooldownResetMultiplier=1.000000
scum.SectorCooldownResetMultiplier=1.000000
scum.ShelterCooldownResetMultiplier=1.000000
scum.SquadCooldownResetMultiplier=1.000000
scum.RandomPricePerSquadmateModifier=0.000000
scum.SectorPricePerSquadmateModifier=10.000000
scum.ShelterPricePerSquadmateModifier=5.000000

# 突襲保護
scum.RaidProtectionType=0
scum.RaidProtectionEnableLog=1
scum.RaidProtectionFlagSpecificChangeSettingCooldown=24:00:00
scum.RaidProtectionFlagSpecificChangeSettingPrice=10.000000
scum.RaidProtectionFlagSpecificMaxProtectionTime=08:00:00
scum.RaidProtectionOfflineProtectionStartDelay=00:30:00
scum.RaidProtectionOfflineMaxProtectionTime=-1
scum.RaidProtectionGlobalShouldShowRaidTimesMessage=1
scum.RaidProtectionGlobalShouldShowRaidAnnouncementMessage=1
scum.RaidProtectionGlobalShouldShowRaidStartEndMessages=1

# 資源管理
scum.WaterPricePerUnitMultiplier=1.000000
scum.WaterPeriodicInitialAmountMultiplier=1.000000
scum.WaterPeriodicMaxAmountMultiplier=1.000000
scum.WaterPeriodicReplenishAmountMultiplier=1.000000
scum.WaterPeriodicReplenishIntervalMultiplier=1.000000
scum.WaterProximityReplenishAmountMultiplier=1.000000
scum.WaterProximityReplenishChanceMultiplier=1.000000
scum.WaterProximityReplenishTimeoutMultiplier=1.000000
scum.GasolinePricePerUnitMultiplier=1.000000
scum.GasolinePeriodicInitialAmountMultiplier=1.000000
scum.GasolinePeriodicMaxAmountMultiplier=1.000000
scum.PropanePricePerUnitMultiplier=1.000000
scum.PropanePeriodicInitialAmountMultiplier=1.000000
scum.PropanePeriodicMaxAmountMultiplier=1.000000
scum.GasolinePeriodicReplenishAmountMultiplier=1.000000
scum.GasolinePeriodicReplenishIntervalMultiplier=1.000000
scum.GasolineProximityReplenishAmountMultiplier=1.000000
scum.GasolineProximityReplenishChanceMultiplier=1.000000
scum.GasolineProximityReplenishTimeoutMultiplier=1.000000
scum.PropanePeriodicReplenishAmountMultiplier=1.000000
scum.PropanePeriodicReplenishIntervalMultiplier=1.000000
scum.PropaneProximityReplenishAmountMultiplier=1.000000
scum.PropaneProximityReplenishChanceMultiplier=1.000000
scum.PropaneProximityReplenishTimeoutMultiplier=1.000000

# 掉落物系統
scum.SpawnerProbabilityMultiplier=1.000000
scum.ExamineSpawnerProbabilityMultiplier=1.000000
scum.ExamineSpawnerExpirationTimeMultiplier=1.000000
scum.SpawnerExpirationTimeMultiplier=1.000000

# 物品冷卻
scum.EnableItemCooldownGroups=1
scum.ItemCooldownGroupsDurationMultiplier=1.000000

# 小隊系統
scum.SquadMemberCountAtIntLevel1=2
scum.SquadMemberCountAtIntLevel2=3
scum.SquadMemberCountAtIntLevel3=4
scum.SquadMemberCountAtIntLevel4=5
scum.SquadMemberCountAtIntLevel5=6
scum.SquadMemberCountLimitForPunishment=8
scum.RTSquadProbationDuration=7
scum.SquadMoneyPenaltyPerPrevSquadMember=100.000000
scum.SquadFamePointsPenaltyPerPrevSquadMember=50.000000
scum.EnableSquadMemberNameWidget=1

# 農業系統
scum.PlantHarvestExamineTimeMultiplier=1.000000
scum.FirstPlantHarvestAdditionalChance=0.100000

# 任務系統
scum.QuestsEnabled=1
scum.QuestsGlobalCycleDuration=23:59:59
scum.MaxQuestsPerCyclePerTrader=5
scum.MaxSimultaneousQuestsPerTrader=3
scum.QuestsTraderRefillCooldown=01:00:00
scum.QuestsPhoneRefillCooldown=02:00:00
scum.QuestsNoticeBoardRefillCooldown=04:00:00
scum.QuestRequirementsBlockTradeableItems=1

# 砲塔系統
scum.TurretsAttackPrisoners=1
scum.TurretsAttackPuppets=1
scum.TurretsAttackVehicles=0
scum.TurretsAttackSentries=0
scum.TurretsAttackAnimals=0
scum.TurretsAttackArmedNPCs=1

# UI介面
scum.HideQuickAccessBar=0
scum.HideLifeIndicators=0

# 伺服器管理
scum.PartialWipe=0
scum.GoldWipe=0
scum.FullWipe=0

# 系統設定
scum.SettingsVersion=1
scum.MaxAllowedNPCs=100
scum.EnableDeenaOnServer=1
scum.EnableDigitalDeluxeStarterPack=0

[Features]
# 遊戲功能
scum.FameGainMultiplier=1.000000
scum.BodySimulationSpeedMultiplier=3.840000
scum.MovementInertiaAmount=1.000000
scum.StaminaDrainOnJumpMultiplier=1.000000
scum.DisableExhaustion=0
scum.FamePointPenaltyOnDeath=0.100000
scum.FamePointPenaltyOnKilled=0.050000
scum.FamePointRewardOnKill=0.100000
scum.StaminaDrainOnClimbMultiplier=1.000000
scum.MaintainItemsExpirationTime=30
scum.KillboxDefuseFailureBonus=0.100000
scum.BedrollVisibilityTimer=300.000000
scum.EnableBCULocking=1

# 技能設定
scum.ArcherySkillMultiplier=1.000000
scum.AviationSkillMultiplier=1.000000
scum.AwarenessSkillMultiplier=1.000000
scum.BrawlingSkillMultiplier=1.000000
scum.CamouflageSkillMultiplier=1.000000
scum.CookingSkillMultiplier=1.000000
scum.DemolitionSkillMultiplier=1.000000
scum.DrivingSkillMultiplier=1.000000
scum.EnduranceSkillMultiplier=1.000000
scum.EngineeringSkillMultiplier=1.000000
scum.FarmingSkillMultiplier=1.000000
scum.HandgunSkillMultiplier=1.000000
scum.MedicalSkillMultiplier=1.000000
scum.MeleeWeaponsSkillMultiplier=1.000000
scum.MotorcycleSkillMultiplier=1.000000
scum.RiflesSkillMultiplier=1.000000
scum.RunningSkillMultiplier=1.000000
scum.SnipingSkillMultiplier=1.000000
scum.StealthSkillMultiplier=1.000000
scum.SurvivalSkillMultiplier=1.000000
scum.ThieverySkillMultiplier=1.000000

[Encounters]
# 遭遇系統
scum.EncounterBaseCharacterAmountMultiplier=1.000000
scum.EncounterExtraCharacterPerPlayerMultiplier=1.000000
scum.EncounterExtraCharacterPlayerCapMultiplier=1.000000
scum.EncounterCharacterRespawnTimeMultiplier=1.000000
scum.EncounterCharacterRespawnBatchSizeMultiplier=1.000000
scum.EncounterCharacterAggressiveSpawnChanceOverride=-1.000000
scum.EncounterCharacterAINoiseResponseRadiusMultiplier=1.000000
scum.EncounterHordeGroupBaseCharacterAmountMultiplier=1.000000
scum.EncounterHordeGroupExtraCharacterPerPlayerMultiplier=1.000000
scum.EncounterHordeGroupExtraCharacterPlayerCapMultiplier=1.000000
scum.EncounterHordeBaseCharacterAmountMultiplier=1.000000
scum.EncounterHordeExtraCharacterPerPlayerMultiplier=1.000000
scum.EncounterHordeExtraCharacterPlayerCapMultiplier=1.000000
scum.EncounterHordeActivationChanceMultiplier=1.000000
scum.EncounterHordeNoiseCheckCooldownMultiplier=1.000000
scum.EncounterHordeSpawnDistanceMultiplier=1.000000
scum.EncounterHordeGroupRefillTimeMultiplier=1.000000
scum.EncounterHordeShouldPlayActivationSound=1
scum.EncounterHordePuppetHordeActivationScreamOverrideChance=-1.000000
scum.EncounterCanRemoveLowPriorityCharacters=1
scum.EncounterCanClampCharacterNumWhenOutOfResources=1
scum.EncounterGlobalZoneCooldownMultiplier=1.000000
scum.EncounterEnableSpawnPreventionAreaSpawnOnCharacterDeath=0
scum.PuppetWorldEncounterSpawnWeightMultiplier=1.000000
scum.AnimalWorldEncounterSpawnWeightMultiplier=1.000000
scum.DropshipWorldEncounterSpawnWeightMultiplier=1.000000
scum.EnableDropshipAbandonedBunkerEncounter=1
scum.DropshipAbandonedBunkerEncounterTriggerChance=-1.000000
scum.BaseBuildingEncounterTriggerChance=0.100000
scum.BaseBuildingEncounterTriggerTimeMultiplier=1.000000
scum.EnableDropshipBaseBuildingEncounter=1
scum.SpawnEncountersInThreatZonesIgnoringBaseBuilding=0
scum.EnableEncounterManagerLowPlayerCountMode=1
scum.BaseBuildingEncounterMinNumElementsToStart=-1
scum.BaseBuildingEncounterMinNumElementsToEnd=5
scum.BaseBuildingEncounterDamagePercentageIncreasePerSquadMember=0.100000
scum.BaseBuildingEncounterTimeToFullMinNumToEnd=3600.000000
scum.BaseBuildingEncounterMaximumMinToEndReduction=1800.000000

# 設定檔結束
# 總計 388 個設定項目
# 涵蓋 31 個設定類別`;
