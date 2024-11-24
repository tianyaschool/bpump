"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Info,
  Volume2,
  VolumeX,
  Wallet,
  Search,
  ArrowUp,
  ArrowDown,
  Star,
  BarChart2,
  Plus,
  RefreshCw,
  Zap,
  DollarSign,
  Sun,
  Moon,
  Trophy,
  Bell,
  MessageSquare,
  History,
  Newspaper,
  Flame,
  AlertTriangle,
  TrendingDown,
  Smile,
  Share2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

export default function Component() {
  const [showAnimations, setShowAnimations] = useState(true);
  const [includeNsfw, setIncludeNsfw] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState("featured");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showBuyDialog, setShowBuyDialog] = useState(false);
  const [showSellDialog, setShowSellDialog] = useState(false);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [buyAmount, setBuyAmount] = useState(50);
  const [sellAmount, setSellAmount] = useState(50);
  const [newCoinName, setNewCoinName] = useState("");
  const [newCoinDescription, setNewCoinDescription] = useState("");
  const [newCoinSymbol, setNewCoinSymbol] = useState("");
  const [newCoinInitialPrice, setNewCoinInitialPrice] = useState(0.000001);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [activeChatRoom, setActiveChatRoom] = useState("general");
  const [chatMessages, setChatMessages] = useState({
    general: [],
    trading: [],
    support: [],
  });
  const [newChatMessage, setNewChatMessage] = useState("");
  const [showDetailedChart, setShowDetailedChart] = useState(false);
  const [walletBalance, setWalletBalance] = useState(1000);
  const [searchTerm, setSearchTerm] = useState("");
  const chatEndRef = useRef(null);
  const [coins, setCoins] = useState([
    {
      name: "PEPE",
      symbol: "PEPE",
      description: "Meme coin inspired by Pepe the Frog",
      price: 0.000001,
      change: 5.2,
      volume: 1200000,
      marketCap: 69000,
      chart: generateMockChartData(),
      progress: 45,
      history: generateMockHistoryData(),
      creator: "System",
    },
    {
      name: "DOGE",
      symbol: "DOGE",
      description: "The original meme coin",
      price: 0.08,
      change: -2.1,
      volume: 500000,
      marketCap: 69000,
      chart: generateMockChartData(),
      progress: 78,
      history: generateMockHistoryData(),
      creator: "System",
    },
    {
      name: "SHIB",
      symbol: "SHIB",
      description: "Dogecoin killer",
      price: 0.000009,
      change: 1.5,
      volume: 800000,
      marketCap: 69000,
      chart: generateMockChartData(),
      progress: 62,
      history: generateMockHistoryData(),
      creator: "System",
    },
    {
      name: "FLOKI",
      symbol: "FLOKI",
      description: "Viking-themed meme coin",
      price: 0.00003,
      change: 8.7,
      volume: 2500000,
      marketCap: 69000,
      chart: generateMockChartData(),
      progress: 91,
      history: generateMockHistoryData(),
      creator: "System",
    },
    {
      name: "ELON",
      symbol: "ELON",
      description: "Dogelon Mars",
      price: 0.0000003,
      change: -0.9,
      volume: 300000,
      marketCap: 69000,
      chart: generateMockChartData(),
      progress: 23,
      history: generateMockHistoryData(),
      creator: "System",
    },
  ]);
  const [favorites, setFavorites] = useState([]);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "PEPE just reached $0.000002!", type: "info" },
    { id: 2, message: "New coin MOON listed!", type: "success" },
  ]);
  const [pumpHistory, setPumpHistory] = useState([
    { date: "2023-06-01", coin: "PEPE", amount: "$500K" },
    { date: "2023-05-28", coin: "DOGE", amount: "$1.2M" },
    { date: "2023-05-25", coin: "SHIB", amount: "$800K" },
  ]);
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Bitcoin Surges Past $40,000",
      content:
        "The world's largest cryptocurrency has broken through a key resistance level...",
      date: "2023-06-14",
    },
    {
      id: 2,
      title: "Ethereum 2.0 Launch Date Announced",
      content:
        "The long-awaited upgrade to the Ethereum network has finally been scheduled...",
      date: "2023-06-13",
    },
    {
      id: 3,
      title: "New Meme Coin Takes Market by Storm",
      content:
        "A new meme-inspired cryptocurrency has gained 1000% in the last 24 hours...",
      date: "2023-06-12",
    },
  ]);
  const [wallet, setWallet] = useState({});
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      name: "First Purchase",
      description: "Buy your first coin",
      completed: false,
    },
    {
      id: 2,
      name: "Diversified Portfolio",
      description: "Own 5 different coins",
      completed: false,
    },
    {
      id: 3,
      name: "Whale Alert",
      description: "Hold over $10,000 worth of coins",
      completed: false,
    },
    {
      id: 4,
      name: "Lucky Charm",
      description: "Make a 100% profit on a single trade",
      completed: false,
    },
    {
      id: 5,
      name: "Diamond Hands",
      description: "Hold a coin for 30 days",
      completed: false,
    },
    {
      id: 6,
      name: "Meme Lord",
      description: "Create your own meme coin",
      completed: false,
    },
    {
      id: 7,
      name: "Pump Master",
      description: "Participate in 10 successful pumps",
      completed: false,
    },
  ]);
  const [tradingHistory, setTradingHistory] = useState([]);
  const [priceAlerts, setPriceAlerts] = useState([]);
  const [referralCode, setReferralCode] = useState(
    "PUMP" + Math.random().toString(36).substring(2, 8).toUpperCase()
  );
  const [referralCount, setReferralCount] = useState(0);

  const steps = [
    "pick a coin that you like",
    "buy the coin on the bonding curve",
    "sell at any time to lock in your profits or losses",
    "when enough people buy on the bonding curve it reaches a market cap of $69k",
    "$12k of liquidity is then deposited in raydium and burned",
  ];

  function generateMockChartData() {
    return Array.from({ length: 24 }, (_, i) => ({
      time: `${i}:00`,
      price: Math.random() * 100,
      volume: Math.random() * 1000000,
    }));
  }

  function generateMockHistoryData() {
    const now = Date.now();
    return Array.from({ length: 30 }, (_, i) => ({
      date: new Date(now - (29 - i) * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      price: Math.random() * 0.0001,
    }));
  }

  function renderMiniChart(data) {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    const height = 20;
    const width = 50;

    return (
      <svg width={width} height={height} className="inline-block ml-2">
        <polyline
          points={data
            .map(
              (value, index) =>
                `${(index / (data.length - 1)) * width},${
                  height - ((value - min) / range) * height
                }`
            )
            .join(" ")}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    );
  }

  const refreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setCoins(
        coins.map((coin) => ({
          ...coin,
          price: coin.price * (1 + (Math.random() - 0.5) * 0.1),
          change: (Math.random() - 0.5) * 20,
          volume: coin.volume * (1 + (Math.random() - 0.5) * 0.2),
          chart: generateMockChartData(),
          progress: Math.min(
            coin.progress + Math.floor(Math.random() * 10),
            100
          ),
          history: [
            ...coin.history,
            { date: new Date().toISOString().split("T")[0], price: coin.price },
          ],
        }))
      );
      setIsRefreshing(false);
      checkPriceAlerts();
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(refreshData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  });

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const handleQuickBuy = (coin) => {
    setSelectedCoin(coin);
    setShowBuyDialog(true);
  };

  const handleQuickSell = (coin) => {
    setSelectedCoin(coin);
    setShowSellDialog(true);
  };

  const executeBuy = () => {
    if (walletBalance >= buyAmount) {
      setWalletBalance((prevBalance) => prevBalance - buyAmount);
      const updatedCoins = coins.map((c) => {
        if (c.name === selectedCoin.name) {
          const newPrice = c.price * (1 + buyAmount / c.marketCap);
          const newMarketCap = c.marketCap + buyAmount;
          const newProgress = Math.min(c.progress + buyAmount / 690, 100);
          return {
            ...c,
            price: newPrice,
            marketCap: newMarketCap,
            progress: newProgress,
            history: [
              ...c.history,
              { date: new Date().toISOString().split("T")[0], price: newPrice },
            ],
          };
        }
        return c;
      });
      setCoins(updatedCoins);
      setWallet((prevWallet) => ({
        ...prevWallet,
        [selectedCoin.name]:
          (prevWallet[selectedCoin.name] || 0) + buyAmount / selectedCoin.price,
      }));
      setShowBuyDialog(false);
      setPumpHistory([
        {
          date: new Date().toISOString().split("T")[0],
          coin: selectedCoin.name,
          amount: `$${buyAmount}`,
        },
        ...pumpHistory,
      ]);
      setTradingHistory((prevHistory) => [
        {
          date: new Date().toISOString(),
          type: "buy",
          coin: selectedCoin.name,
          amount: buyAmount,
          price: selectedCoin.price,
        },
        ...prevHistory,
      ]);
      addNotification(
        `Successfully bought $${buyAmount} of ${selectedCoin.name}!`,
        "success"
      );
      setBuyAmount(50);
      checkAndBurnCoin(selectedCoin.name);
      checkAchievements();
    } else {
      addNotification(
        `Insufficient balance to buy $${buyAmount} of ${selectedCoin.name}.`,
        "error"
      );
    }
  };

  const executeSell = () => {
    const ownedAmount = wallet[selectedCoin.name] || 0;
    const sellValue = sellAmount * selectedCoin.price;
    if (ownedAmount >= sellAmount / selectedCoin.price) {
      setWalletBalance((prevBalance) => prevBalance + sellValue);
      const updatedCoins = coins.map((c) => {
        if (c.name === selectedCoin.name) {
          const newPrice = c.price * (1 - sellValue / c.marketCap);
          const newMarketCap = c.marketCap - sellValue;
          const newProgress = Math.max(c.progress - sellValue / 690, 0);
          return {
            ...c,
            price: newPrice,
            marketCap: newMarketCap,
            progress: newProgress,
            history: [
              ...c.history,
              { date: new Date().toISOString().split("T")[0], price: newPrice },
            ],
          };
        }
        return c;
      });
      setCoins(updatedCoins);
      setWallet((prevWallet) => ({
        ...prevWallet,
        [selectedCoin.name]:
          prevWallet[selectedCoin.name] - sellAmount / selectedCoin.price,
      }));
      setShowSellDialog(false);
      setTradingHistory((prevHistory) => [
        {
          date: new Date().toISOString(),
          type: "sell",
          coin: selectedCoin.name,
          amount: sellAmount,
          price: selectedCoin.price,
        },
        ...prevHistory,
      ]);
      addNotification(
        `Successfully sold $${sellValue.toFixed(2)} of ${selectedCoin.name}!`,
        "success"
      );
      setSellAmount(50);
      checkAchievements();
    } else {
      addNotification(
        `Insufficient ${selectedCoin.name} balance to sell.`,
        "error"
      );
    }
  };

  const checkAndBurnCoin = (coinName) => {
    const coin = coins.find((c) => c.name === coinName);
    if (coin && coin.marketCap >= 69000) {
      const updatedCoins = coins.filter((c) => c.name !== coinName);
      setCoins(updatedCoins);
      addNotification(
        `${coinName} has reached $69k market cap and has been burned!`,
        "info"
      );
      setPumpHistory([
        {
          date: new Date().toISOString().split("T")[0],
          coin: coinName,
          amount: "BURNED",
        },
        ...pumpHistory,
      ]);
    }
  };

  const toggleFavorite = (coin) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(coin.name)
        ? prevFavorites.filter((name) => name !== coin.name)
        : [...prevFavorites, coin.name]
    );
  };

  const createNewCoin = () => {
    if (newCoinName && newCoinSymbol && newCoinInitialPrice > 0) {
      const newCoin = {
        name: newCoinName,
        symbol: newCoinSymbol.toUpperCase(),
        description: newCoinDescription || `A new coin called ${newCoinName}`,
        price: newCoinInitialPrice,
        change: 0,
        volume: 0,
        marketCap: 1000, // Initial market cap
        chart: generateMockChartData(),
        progress: 1,
        history: [
          {
            date: new Date().toISOString().split("T")[0],
            price: newCoinInitialPrice,
          },
        ],
        creator: "You",
      };
      setCoins([newCoin, ...coins]);
      setNewCoinName("");
      setNewCoinSymbol("");
      setNewCoinDescription("");
      setNewCoinInitialPrice(0.000001);
      setShowCreateDialog(false);
      addNotification(
        `New coin ${newCoin.name} (${newCoin.symbol}) created!`,
        "success"
      );
      checkAchievements();
    } else {
      addNotification(
        "Please fill in all required fields to create a new coin.",
        "error"
      );
    }
  };

  const addNotification = (message, type = "info") => {
    setNotifications([{ id: Date.now(), message, type }, ...notifications]);
  };

  const sendChatMessage = () => {
    if (newChatMessage.trim()) {
      const userColors = [
        "#FF6B6B",
        "#4ECDC4",
        "#45B7D1",
        "#F7B731",
        "#5D5D5A",
      ];
      setChatMessages((prevMessages) => ({
        ...prevMessages,
        [activeChatRoom]: [
          ...prevMessages[activeChatRoom],
          {
            user: "You",
            message: newChatMessage.trim(),
            color: userColors[Math.floor(Math.random() * userColors.length)],
          },
        ],
      }));
      setNewChatMessage("");
    }
  };

  const formatPrice = (price) => {
    return price < 0.01 ? price.toFixed(6) : price.toFixed(2);
  };

  const formatVolume = (volume) => {
    return volume >= 1000000
      ? `$${(volume / 1000000).toFixed(1)}M`
      : `$${(volume / 1000).toFixed(1)}K`;
  };

  const checkAchievements = () => {
    const updatedAchievements = achievements.map((achievement) => {
      if (
        achievement.id === 1 &&
        !achievement.completed &&
        Object.keys(wallet).length > 0
      ) {
        addNotification("Achievement unlocked: First Purchase!", "success");
        return { ...achievement, completed: true };
      }
      if (
        achievement.id === 2 &&
        !achievement.completed &&
        Object.keys(wallet).length >= 5
      ) {
        addNotification(
          "Achievement unlocked: Diversified Portfolio!",
          "success"
        );
        return { ...achievement, completed: true };
      }
      if (achievement.id === 3 && !achievement.completed) {
        const totalValue = Object.entries(wallet).reduce(
          (total, [coinName, amount]) => {
            const coin = coins.find((c) => c.name === coinName);
            return total + (coin ? amount * coin.price : 0);
          },
          0
        );
        if (totalValue > 10000) {
          addNotification("Achievement unlocked: Whale Alert!", "success");
          return { ...achievement, completed: true };
        }
      }
      if (achievement.id === 4 && !achievement.completed) {
        const hasProfitableTrade = tradingHistory.some((trade) => {
          if (trade.type === "sell") {
            const buyTrade = tradingHistory.find(
              (t) =>
                t.type === "buy" && t.coin === trade.coin && t.date < trade.date
            );
            if (buyTrade) {
              const profit = (trade.price - buyTrade.price) / buyTrade.price;
              return profit >= 1; // 100% profit
            }
          }
          return false;
        });
        if (hasProfitableTrade) {
          addNotification("Achievement unlocked: Lucky Charm!", "success");
          return { ...achievement, completed: true };
        }
      }
      if (achievement.id === 5 && !achievement.completed) {
        const now = new Date();
        const hasLongHeldCoin = Object.entries(wallet).some(
          ([coinName, amount]) => {
            const firstBuyTrade = tradingHistory.find(
              (t) => t.type === "buy" && t.coin === coinName
            );
            if (firstBuyTrade) {
              const holdingPeriod =
                (now - new Date(firstBuyTrade.date)) / (1000 * 60 * 60 * 24);
              return holdingPeriod >= 30;
            }
            return false;
          }
        );
        if (hasLongHeldCoin) {
          addNotification("Achievement unlocked: Diamond Hands!", "success");
          return { ...achievement, completed: true };
        }
      }
      if (achievement.id === 6 && !achievement.completed) {
        if (coins.some((coin) => coin.creator === "You")) {
          addNotification("Achievement unlocked: Meme Lord!", "success");
          return { ...achievement, completed: true };
        }
      }
      if (achievement.id === 7 && !achievement.completed) {
        if (
          pumpHistory.filter((pump) => pump.amount !== "BURNED").length >= 10
        ) {
          addNotification("Achievement unlocked: Pump Master!", "success");
          return { ...achievement, completed: true };
        }
      }
      return achievement;
    });
    setAchievements(updatedAchievements);
  };

  const addPriceAlert = (coin, targetPrice) => {
    setPriceAlerts([...priceAlerts, { coin, targetPrice }]);
    addNotification(
      `Price alert set for ${coin.name} at $${targetPrice}`,
      "info"
    );
  };

  const checkPriceAlerts = () => {
    priceAlerts.forEach((alert) => {
      const coin = coins.find((c) => c.name === alert.coin.name);
      if (coin) {
        if (
          (alert.targetPrice > alert.coin.price &&
            coin.price >= alert.targetPrice) ||
          (alert.targetPrice < alert.coin.price &&
            coin.price <= alert.targetPrice)
        ) {
          addNotification(
            `Price alert: ${coin.name} has reached $${formatPrice(
              coin.price
            )}!`,
            "info"
          );
          setPriceAlerts(priceAlerts.filter((a) => a !== alert));
        }
      }
    });
  };

  const shareReferralCode = () => {
    navigator.clipboard.writeText(
      `Join pump.fun with my referral code: ${referralCode}`
    );
    addNotification("Referral code copied to clipboard!", "success");
  };

  const topGainers = [...coins].sort((a, b) => b.change - a.change).slice(0, 3);
  const topLosers = [...coins].sort((a, b) => a.change - b.change).slice(0, 3);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const myCoins = coins.filter((coin) => coin.creator === "You");

  const portfolioValue = Object.entries(wallet).reduce(
    (total, [coinName, amount]) => {
      const coin = coins.find((c) => c.name === coinName);
      return total + (coin ? amount * coin.price : 0);
    },
    0
  );

  return (
    <div
      className={`min-h-screen ${
        isDarkTheme ? "bg-black text-gray-300" : "bg-gray-100 text-gray-800"
      } font-mono`}
    >
      <header
        className={`border-b ${
          isDarkTheme ? "border-gray-800" : "border-gray-300"
        } p-4`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`${
                      isDarkTheme
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                    onClick={() => setShowHowItWorks(true)}
                  >
                    <Info className="h-4 w-4 mr-2" />
                    How it works
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Learn about the pump mechanism</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span
              className={`${isDarkTheme ? "text-gray-600" : "text-gray-400"}`}
            >
              [advanced]
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`${
                      isDarkTheme
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isMuted ? "Unmute" : "Mute"} sounds</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`${
                      isDarkTheme
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                    onClick={() => setIsDarkTheme(!isDarkTheme)}
                  >
                    {isDarkTheme ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle {isDarkTheme ? "light" : "dark"} mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-center space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`${
                      isDarkTheme
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                    onClick={() => setShowNotifications(!showNotifications)}
                  >
                    <Bell className="h-4 w-4" />
                    {notifications.length > 0 && (
                      <Badge variant="destructive" className="ml-1">
                        {notifications.length}
                      </Badge>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`${
                      isDarkTheme
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                    onClick={() => setShowChat(!showChat)}
                  >
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Chat</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button
              variant="outline"
              size="sm"
              className={`${
                isDarkTheme
                  ? "text-gray-300 border-gray-700"
                  : "text-gray-800 border-gray-300"
              }`}
            >
              <Wallet className="h-4 w-4 mr-2" />${walletBalance.toFixed(2)}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl mb-8 text-center">[start a new coin]</h1>

          <div className="space-y-6 mb-12">
            <div
              className={`flex items-center justify-between p-4 ${
                isDarkTheme ? "bg-gray-900/50" : "bg-gray-200"
              } rounded-lg`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm">Show animations:</span>
                <Switch
                  checked={showAnimations}
                  onCheckedChange={setShowAnimations}
                />
                <span className="text-xs text-gray-500">
                  {showAnimations ? "On" : "Off"}
                </span>
              </div>
            </div>

            <div
              className={`flex items-center justify-between p-4 ${
                isDarkTheme ? "bg-gray-900/50" : "bg-gray-200"
              } rounded-lg`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm">Include nsfw:</span>
                <Switch
                  checked={includeNsfw}
                  onCheckedChange={setIncludeNsfw}
                />
                <span className="text-xs text-gray-500">
                  {includeNsfw ? "On" : "Off"}
                </span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="featured" className="mb-6">
            <TabsList
              className={`grid w-full grid-cols-5 ${
                isDarkTheme ? "bg-gray-900" : "bg-gray-200"
              }`}
            >
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="my">My Coins</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <TabsContent value="featured">
              <div className="flex justify-between items-center mb-4">
                <div className="relative flex-grow mr-4">
                  <Input
                    type="text"
                    placeholder="Search coins..."
                    className={`${
                      isDarkTheme
                        ? "bg-gray-900 border-gray-700 text-gray-300"
                        : "bg-white border-gray-300 text-gray-800"
                    } pl-10`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                </div>
                <div className="flex space-x-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className={`${
                            isDarkTheme
                              ? "text-gray-300 border-gray-700"
                              : "text-gray-800 border-gray-300"
                          }`}
                          onClick={refreshData}
                        >
                          <RefreshCw
                            className={`h-4 w-4 ${
                              isRefreshing ? "animate-spin" : ""
                            }`}
                          />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Refresh data</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      isDarkTheme
                        ? "text-gray-300 border-gray-700"
                        : "text-gray-800 border-gray-300"
                    }`}
                    onClick={() => setShowCreateDialog(true)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Coin
                  </Button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead
                        className={
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        Name
                      </TableHead>
                      <TableHead
                        className={
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        Symbol
                      </TableHead>
                      <TableHead
                        className={
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        Price
                      </TableHead>
                      <TableHead
                        className={
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        24h Change
                      </TableHead>
                      <TableHead
                        className={
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        Volume
                      </TableHead>
                      <TableHead
                        className={
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        Market Cap
                      </TableHead>
                      <TableHead
                        className={
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        Chart
                      </TableHead>
                      <TableHead
                        className={
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        Progress
                      </TableHead>
                      <TableHead
                        className={
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCoins.map((coin) => (
                      <TableRow
                        key={coin.name}
                        className={
                          isDarkTheme
                            ? "border-b border-gray-800"
                            : "border-b border-gray-200"
                        }
                      >
                        <TableCell className="font-medium">
                          {coin.name}
                          {favorites.includes(coin.name) && (
                            <Badge variant="secondary" className="ml-2">
                              Favorite
                            </Badge>
                          )}
                          {coin.creator === "You" && (
                            <Badge variant="outline" className="ml-2">
                              Your Coin
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{coin.symbol}</TableCell>
                        <TableCell>${formatPrice(coin.price)}</TableCell>
                        <TableCell
                          className={
                            coin.change > 0 ? "text-green-400" : "text-red-400"
                          }
                        >
                          {coin.change > 0 ? (
                            <ArrowUp className="inline h-4 w-4 mr-1" />
                          ) : (
                            <ArrowDown className="inline h-4 w-4 mr-1" />
                          )}
                          {coin.change.toFixed(2)}%
                        </TableCell>
                        <TableCell>{formatVolume(coin.volume)}</TableCell>
                        <TableCell>${formatVolume(coin.marketCap)}</TableCell>
                        <TableCell>
                          {renderMiniChart(coin.chart.map((d) => d.price))}
                        </TableCell>
                        <TableCell>
                          <Progress
                            value={coin.progress}
                            className="w-[60px]"
                          />
                        </TableCell>
                        <TableCell>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className={`${
                                    isDarkTheme
                                      ? "text-gray-400 hover:text-gray-300"
                                      : "text-gray-600 hover:text-gray-800"
                                  }`}
                                  onClick={() => toggleFavorite(coin)}
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.includes(coin.name)
                                        ? "text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  {favorites.includes(coin.name)
                                    ? "Remove from favorites"
                                    : "Add to favorites"}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className={`${
                                    isDarkTheme
                                      ? "text-gray-400 hover:text-gray-300"
                                      : "text-gray-600 hover:text-gray-800"
                                  }`}
                                  onClick={() => setShowDetailedChart(coin)}
                                >
                                  <BarChart2 className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View detailed chart</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className={`${
                                    isDarkTheme
                                      ? "text-gray-400 hover:text-gray-300"
                                      : "text-gray-600 hover:text-gray-800"
                                  }`}
                                  onClick={() => handleQuickBuy(coin)}
                                >
                                  <Zap className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Quick buy</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className={`${
                                    isDarkTheme
                                      ? "text-gray-400 hover:text-gray-300"
                                      : "text-gray-600 hover:text-gray-800"
                                  }`}
                                  onClick={() => handleQuickSell(coin)}
                                >
                                  <TrendingDown className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Quick sell</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className={`${
                                    isDarkTheme
                                      ? "text-gray-400 hover:text-gray-300"
                                      : "text-gray-600 hover:text-gray-800"
                                  }`}
                                  onClick={() => setShowAlertDialog(coin)}
                                >
                                  <AlertCircle className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Set price alert</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="all">
              <p className={isDarkTheme ? "text-gray-400" : "text-gray-600"}>
                All coins will be displayed here.
              </p>
            </TabsContent>
            <TabsContent value="my">
              {myCoins.length > 0 ? (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead
                          className={
                            isDarkTheme ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          Name
                        </TableHead>
                        <TableHead
                          className={
                            isDarkTheme ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          Symbol
                        </TableHead>
                        <TableHead
                          className={
                            isDarkTheme ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          Price
                        </TableHead>
                        <TableHead
                          className={
                            isDarkTheme ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          24h Change
                        </TableHead>
                        <TableHead
                          className={
                            isDarkTheme ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          Volume
                        </TableHead>
                        <TableHead
                          className={
                            isDarkTheme ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          Market Cap
                        </TableHead>
                        <TableHead
                          className={
                            isDarkTheme ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          Progress
                        </TableHead>
                        <TableHead
                          className={
                            isDarkTheme ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {myCoins.map((coin) => (
                        <TableRow
                          key={coin.name}
                          className={
                            isDarkTheme
                              ? "border-b border-gray-800"
                              : "border-b border-gray-200"
                          }
                        >
                          <TableCell className="font-medium">
                            {coin.name}
                          </TableCell>
                          <TableCell>{coin.symbol}</TableCell>
                          <TableCell>${formatPrice(coin.price)}</TableCell>
                          <TableCell
                            className={
                              coin.change > 0
                                ? "text-green-400"
                                : "text-red-400"
                            }
                          >
                            {coin.change > 0 ? (
                              <ArrowUp className="inline h-4 w-4 mr-1" />
                            ) : (
                              <ArrowDown className="inline h-4 w-4 mr-1" />
                            )}
                            {coin.change.toFixed(2)}%
                          </TableCell>
                          <TableCell>{formatVolume(coin.volume)}</TableCell>
                          <TableCell>${formatVolume(coin.marketCap)}</TableCell>
                          <TableCell>
                            <Progress
                              value={coin.progress}
                              className="w-[60px]"
                            />
                          </TableCell>
                          <TableCell>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className={`${
                                      isDarkTheme
                                        ? "text-gray-400 hover:text-gray-300"
                                        : "text-gray-600 hover:text-gray-800"
                                    }`}
                                    onClick={() => setShowDetailedChart(coin)}
                                  >
                                    <BarChart2 className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>View detailed chart</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className={`${
                                      isDarkTheme
                                        ? "text-gray-400 hover:text-gray-300"
                                        : "text-gray-600 hover:text-gray-800"
                                    }`}
                                    onClick={() => handleQuickBuy(coin)}
                                  >
                                    <Zap className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Quick buy</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className={`${
                                      isDarkTheme
                                        ? "text-gray-400 hover:text-gray-300"
                                        : "text-gray-600 hover:text-gray-800"
                                    }`}
                                    onClick={() => handleQuickSell(coin)}
                                  >
                                    <TrendingDown className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Quick sell</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <p className={isDarkTheme ? "text-gray-400" : "text-gray-600"}>
                  You haven not created any coins yet. Click the Create Coin
                  button to get started!
                </p>
              )}
            </TabsContent>
            <TabsContent value="portfolio">
              <Card
                className={
                  isDarkTheme
                    ? "bg-gray-900 text-gray-300"
                    : "bg-white text-gray-800"
                }
              >
                <CardHeader>
                  <CardTitle>Your Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-4">
                    Total Value: ${portfolioValue.toFixed(2)}
                  </p>
                  {Object.entries(wallet).map(([coinName, amount]) => {
                    const coin = coins.find((c) => c.name === coinName);
                    if (coin) {
                      const value = amount * coin.price;
                      return (
                        <div
                          key={coinName}
                          className="flex justify-between items-center mb-2"
                        >
                          <span>{coinName}</span>
                          <span>
                            {amount.toFixed(6)} (${value.toFixed(2)})
                          </span>
                        </div>
                      );
                    }
                    return null;
                  })}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="history">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead
                        className={
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        Date
                      </TableHead>
                      <TableHead
                        className={
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        Type
                      </TableHead>
                      <TableHead
                        className={
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        Coin
                      </TableHead>
                      <TableHead
                        className={
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        Amount
                      </TableHead>
                      <TableHead
                        className={
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        Price
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tradingHistory.map((trade, index) => (
                      <TableRow
                        key={index}
                        className={
                          isDarkTheme
                            ? "border-b border-gray-800"
                            : "border-b border-gray-200"
                        }
                      >
                        <TableCell>
                          {new Date(trade.date).toLocaleString()}
                        </TableCell>
                        <TableCell
                          className={
                            trade.type === "buy"
                              ? "text-green-400"
                              : "text-red-400"
                          }
                        >
                          {trade.type === "buy" ? "Buy" : "Sell"}
                        </TableCell>
                        <TableCell>{trade.coin}</TableCell>
                        <TableCell>${trade.amount.toFixed(2)}</TableCell>
                        <TableCell>${formatPrice(trade.price)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              className={
                isDarkTheme
                  ? "bg-gray-900 text-gray-300"
                  : "bg-white text-gray-800"
              }
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Top Gainers</h3>
                    <ol className="list-decimal list-inside">
                      {topGainers.map((coin) => (
                        <li key={coin.name} className="mb-1">
                          {coin.name} -{" "}
                          <span className="text-green-400">
                            +{coin.change.toFixed(2)}%
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Top Losers</h3>
                    <ol className="list-decimal list-inside">
                      {topLosers.map((coin) => (
                        <li key={coin.name} className="mb-1">
                          {coin.name} -{" "}
                          <span className="text-red-400">
                            {coin.change.toFixed(2)}%
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={
                isDarkTheme
                  ? "bg-gray-900 text-gray-300"
                  : "bg-white text-gray-800"
              }
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="h-5 w-5 mr-2" />
                  Pump History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  {pumpHistory.map((pump, index) => (
                    <div key={index} className="mb-2">
                      <span className="text-sm text-gray-500">{pump.date}</span>
                      <p>
                        {pump.coin} pumped {pump.amount}
                      </p>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>

            <Card
              className={
                isDarkTheme
                  ? "bg-gray-900 text-gray-300"
                  : "bg-white text-gray-800"
              }
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Newspaper className="h-5 w-5 mr-2" />
                  Latest News
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  {news.map((item) => (
                    <div key={item.id} className="mb-4">
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                      <p className="text-sm mt-1">
                        {item.content.slice(0, 100)}...
                      </p>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          <Card
            className={`mt-8 ${
              isDarkTheme
                ? "bg-gray-900 text-gray-300"
                : "bg-white text-gray-800"
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-lg ${
                      achievement.completed ? "bg-green-800" : "bg-gray-800"
                    }`}
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {achievement.name}
                    </h3>
                    <p className="text-sm">{achievement.description}</p>
                    {achievement.completed && (
                      <Smile className="h-5 w-5 mt-2" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card
            className={`mt-8 ${
              isDarkTheme
                ? "bg-gray-900 text-gray-300"
                : "bg-white text-gray-800"
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center">
                <Share2 className="h-5 w-5 mr-2" />
                Refer a Friend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Share your referral code and earn rewards when your friends
                join!
              </p>
              <div className="flex items-center space-x-2">
                <Input
                  value={referralCode}
                  readOnly
                  className={
                    isDarkTheme
                      ? "bg-gray-800 text-gray-300"
                      : "bg-white text-gray-800"
                  }
                />
                <Button onClick={shareReferralCode}>Copy</Button>
              </div>
              <p className="mt-4">Total referrals: {referralCount}</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Dialog open={showHowItWorks} onOpenChange={setShowHowItWorks}>
        <DialogContent
          className={
            isDarkTheme
              ? "bg-gray-900 text-gray-300 border-gray-800"
              : "bg-white text-gray-800 border-gray-300"
          }
        >
          <DialogHeader>
            <DialogTitle className="text-xl">How it works</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm">
              Pump prevents rugs by making sure that all created tokens are
              safe. Each coin on pump is a{" "}
              <span className="text-green-400">fair-launch</span> with{" "}
              <span className="text-blue-400">no presale</span> and{" "}
              <span className="text-orange-400">no team allocation</span>.
            </p>
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-gray-500">step {index + 1}:</span>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
            <Button
              className={`w-full ${
                isDarkTheme
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
              onClick={() => setShowHowItWorks(false)}
            >
              [I&apos;m ready to pump]
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showBuyDialog} onOpenChange={setShowBuyDialog}>
        <DialogContent
          className={
            isDarkTheme
              ? "bg-gray-900 text-gray-300 border-gray-800"
              : "bg-white text-gray-800 border-gray-300"
          }
        >
          <DialogHeader>
            <DialogTitle className="text-xl">
              Quick Buy {selectedCoin?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm">Select the amount you want to buy:</p>
            <div className="flex items-center space-x-4">
              <DollarSign className="h-4 w-4" />
              <Slider
                value={[buyAmount]}
                onValueChange={(value) => setBuyAmount(value[0])}
                max={100}
                step={1}
              />
              <span>{buyAmount}</span>
            </div>
            <p className="text-xs text-gray-400">
              Estimated price: ${(buyAmount * 0.01).toFixed(2)}
            </p>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Cryptocurrency investments are highly volatile and risky. Only
                invest what you can afford to lose.
              </AlertDescription>
            </Alert>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowBuyDialog(false)}>
              Cancel
            </Button>
            <Button onClick={executeBuy}>Buy Now</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showSellDialog} onOpenChange={setShowSellDialog}>
        <DialogContent
          className={
            isDarkTheme
              ? "bg-gray-900 text-gray-300 border-gray-800"
              : "bg-white text-gray-800 border-gray-300"
          }
        >
          <DialogHeader>
            <DialogTitle className="text-xl">
              Quick Sell {selectedCoin?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm">Select the amount you want to sell:</p>
            <div className="flex items-center space-x-4">
              <DollarSign className="h-4 w-4" />
              <Slider
                value={[sellAmount]}
                onValueChange={(value) => setSellAmount(value[0])}
                max={100}
                step={1}
              />
              <span>{sellAmount}</span>
            </div>
            <p className="text-xs text-gray-400">
              Estimated price: ${(sellAmount * 0.01).toFixed(2)}
            </p>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Selling cryptocurrencies may result in capital gains or losses.
                Consider the tax implications.
              </AlertDescription>
            </Alert>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSellDialog(false)}>
              Cancel
            </Button>
            <Button onClick={executeSell}>Sell Now</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent
          className={
            isDarkTheme
              ? "bg-gray-900 text-gray-300 border-gray-800"
              : "bg-white text-gray-800 border-gray-300"
          }
        >
          <DialogHeader>
            <DialogTitle className="text-xl">Create New Coin</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="coinName">Coin Name</Label>
              <Input
                id="coinName"
                type="text"
                placeholder="Enter coin name"
                value={newCoinName}
                onChange={(e) => setNewCoinName(e.target.value)}
                className={
                  isDarkTheme
                    ? "bg-gray-800 border-gray-700 text-gray-300"
                    : "bg-white border-gray-300 text-gray-800"
                }
              />
            </div>
            <div>
              <Label htmlFor="coinSymbol">Coin Symbol</Label>
              <Input
                id="coinSymbol"
                type="text"
                placeholder="Enter coin symbol (e.g., BTC)"
                value={newCoinSymbol}
                onChange={(e) => setNewCoinSymbol(e.target.value)}
                className={
                  isDarkTheme
                    ? "bg-gray-800 border-gray-700 text-gray-300"
                    : "bg-white border-gray-300 text-gray-800"
                }
              />
            </div>
            <div>
              <Label htmlFor="coinDescription">
                Coin Description (optional)
              </Label>
              <Textarea
                id="coinDescription"
                placeholder="Enter a brief description of your coin"
                value={newCoinDescription}
                onChange={(e) => setNewCoinDescription(e.target.value)}
                className={
                  isDarkTheme
                    ? "bg-gray-800 border-gray-700 text-gray-300"
                    : "bg-white border-gray-300 text-gray-800"
                }
              />
            </div>
            <div>
              <Label htmlFor="initialPrice">Initial Price (USD)</Label>
              <Input
                id="initialPrice"
                type="number"
                step="0.000001"
                min="0.000001"
                value={newCoinInitialPrice}
                onChange={(e) =>
                  setNewCoinInitialPrice(parseFloat(e.target.value))
                }
                className={
                  isDarkTheme
                    ? "bg-gray-800 border-gray-700 text-gray-300"
                    : "bg-white border-gray-300 text-gray-800"
                }
              />
            </div>
            <Alert>
              <Flame className="h-4 w-4" />
              <AlertTitle>Attention</AlertTitle>
              <AlertDescription>
                Creating a new coin is an irreversible action. Make sure all
                details are correct before proceeding.
              </AlertDescription>
            </Alert>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowCreateDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={createNewCoin}>Create Coin</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {showDetailedChart && (
        <Dialog
          open={!!showDetailedChart}
          onOpenChange={() => setShowDetailedChart(null)}
        >
          <DialogContent
            className={`${
              isDarkTheme
                ? "bg-gray-900 text-gray-300 border-gray-800"
                : "bg-white text-gray-800 border-gray-300"
            } w-full max-w-3xl`}
          >
            <DialogHeader>
              <DialogTitle className="text-xl">
                {showDetailedChart.name} Detailed Chart
              </DialogTitle>
            </DialogHeader>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={showDetailedChart.history}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <RechartsTooltip />
                  <Line type="monotone" dataKey="price" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {showNotifications && (
        <div
          className={`fixed top-16 right-4 w-80 ${
            isDarkTheme ? "bg-gray-900 text-gray-300" : "bg-white text-gray-800"
          } rounded-lg shadow-lg p-4`}
        >
          <h3 className="text-lg font-semibold mb-2">Notifications</h3>
          <ScrollArea className="h-[300px]">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`mb-2 p-2 rounded ${
                  notification.type === "success"
                    ? "bg-green-800"
                    : notification.type === "error"
                    ? "bg-red-800"
                    : "bg-gray-800"
                }`}
              >
                <p className="text-sm">{notification.message}</p>
              </div>
            ))}
          </ScrollArea>
        </div>
      )}

      {showChat && (
        <div
          className={`fixed bottom-4 right-4 w-80 ${
            isDarkTheme ? "bg-gray-900 text-gray-300" : "bg-white text-gray-800"
          } rounded-lg shadow-lg`}
        >
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-semibold">Chat</h3>
          </div>
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="general"
                onClick={() => setActiveChatRoom("general")}
              >
                General
              </TabsTrigger>
              <TabsTrigger
                value="trading"
                onClick={() => setActiveChatRoom("trading")}
              >
                Trading
              </TabsTrigger>
              <TabsTrigger
                value="support"
                onClick={() => setActiveChatRoom("support")}
              >
                Support
              </TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <ScrollArea className="h-[200px] p-4">
                {chatMessages.general.map((msg, index) => (
                  <div key={index} className="mb-2">
                    <span
                      className="font-semibold"
                      style={{ color: msg.color }}
                    >
                      {msg.user}:{" "}
                    </span>
                    <span>{msg.message}</span>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </ScrollArea>
            </TabsContent>
            <TabsContent value="trading">
              <ScrollArea className="h-[200px] p-4">
                {chatMessages.trading.map((msg, index) => (
                  <div key={index} className="mb-2">
                    <span
                      className="font-semibold"
                      style={{ color: msg.color }}
                    >
                      {msg.user}:{" "}
                    </span>
                    <span>{msg.message}</span>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </ScrollArea>
            </TabsContent>
            <TabsContent value="support">
              <ScrollArea className="h-[200px] p-4">
                {chatMessages.support.map((msg, index) => (
                  <div key={index} className="mb-2">
                    <span
                      className="font-semibold"
                      style={{ color: msg.color }}
                    >
                      {msg.user}:{" "}
                    </span>
                    <span>{msg.message}</span>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </ScrollArea>
            </TabsContent>
          </Tabs>
          <div className="p-4 border-t border-gray-700">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendChatMessage();
              }}
              className="flex"
            >
              <Input
                type="text"
                placeholder="Type a message..."
                value={newChatMessage}
                onChange={(e) => setNewChatMessage(e.target.value)}
                className={`flex-grow ${
                  isDarkTheme
                    ? "bg-gray-800 border-gray-700 text-gray-300"
                    : "bg-white border-gray-300 text-gray-800"
                }`}
              />
              <Button type="submit" className="ml-2">
                Send
              </Button>
            </form>
          </div>
        </div>
      )}

      <Dialog
        open={showAlertDialog}
        onOpenChange={() => setShowAlertDialog(null)}
      >
        <DialogContent
          className={
            isDarkTheme
              ? "bg-gray-900 text-gray-300 border-gray-800"
              : "bg-white text-gray-800 border-gray-300"
          }
        >
          <DialogHeader>
            <DialogTitle className="text-xl">
              Set Price Alert for {showAlertDialog?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="alertPrice">Alert Price (USD)</Label>
              <Input
                id="alertPrice"
                type="number"
                step="0.000001"
                min="0.000001"
                placeholder="Enter alert price"
                className={
                  isDarkTheme
                    ? "bg-gray-800 border-gray-700 text-gray-300"
                    : "bg-white border-gray-300 text-gray-800"
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAlertDialog(null)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                const alertPrice = parseFloat(
                  document.getElementById("alertPrice").value
                );
                if (alertPrice && showAlertDialog) {
                  addPriceAlert(showAlertDialog, alertPrice);
                  setShowAlertDialog(null);
                }
              }}
            >
              Set Alert
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
