import MarkWebberAvatar from './assets/avatar-mark-webber.webp'
import AngelaGrayAvatar from './assets/avatar-angela-gray.webp'
import JacobThompsonAvatar from './assets/avatar-jacob-thompson.webp'
import RizkyHasanuddinAvatar from './assets/avatar-rizky-hasanuddin.webp'
import KimberlySmithAvatar from './assets/avatar-kimberly-smith.webp'
import NathanPetersonAvatar from './assets/avatar-nathan-peterson.webp'
import AnnaKimAvatar from './assets/avatar-anna-kim.webp'
import commentedImage from './assets/image-chess.webp'

export const data = [
    {
        id: 1,
        avatar: MarkWebberAvatar,
        username: "Mark Webber",
        action: "reacted to your recent post",
        post_title: "My first tournament today!",
        active: true,
        date: "1m ago"
    },
    {
        id: 2,
        avatar: AngelaGrayAvatar,
        username: "Angela Gray",
        action: "followed you",
        active: true,
        date: "5m ago"
    },
    {
        id: 3,
        avatar: JacobThompsonAvatar,
        username: "Jacob Thompson",
        action: "has joined your group",
        group: "Chess Club",
        active: true,
        date: "1 day ago"
    },
    {
        id: 4,
        avatar: RizkyHasanuddinAvatar,
        username: "Rizky Hasanuddin",
        action: "sent you a private message",
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i'm already having lots of fun and improving my game.",
        active: false,
        date: "5 days ago"
    },
    {
        id: 5,
        avatar: KimberlySmithAvatar,
        username: "Kimberly Smith",
        action: "commented on your picture",
        picture: commentedImage,
        active: false,
        date: "1 week ago"
    },
    {
        id: 6,
        avatar: NathanPetersonAvatar,
        username: "Nathan Peterson",
        action: "reacted to your recent post",
        post_title: "5 end-game strategies to increase your win rate",
        active: false,
        date: "2 weeks ago"
    },
    {
        id: 7,
        avatar: AnnaKimAvatar,
        username: "Anna Kim",
        action: "left the group",
        group: "Chess Club",
        active: false,
        date: "2 weeks ago"
    }
]