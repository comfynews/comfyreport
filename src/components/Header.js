import {Divider, Hidden, makeStyles, Toolbar} from "@material-ui/core";
import comfyLogo from '../assets/header-logo.svg';
import Ticker from "./Ticker";
import SideDrawer from "./SideDrawer";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
// import WalletButton from "./WalletButton";
import React from "react";

const useStyles = makeStyles((theme) => ({
    header: {
        // backgroundColor: '#212328',
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), ' +
            'linear-gradient(to right, #1e161d 0%, #191a1f 100%)',
        marginBottom: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 64,
    },
    drawer: {
        alignSelf: 'center',
        '&:hover': {
            backgroundColor: 'transparent',
        }
    },
    toolbar: {
        width: 1235,
    },
    toolbarMobile: {
        width: 'auto',
    },
    title: {
        alignSelf: 'center',
    },
    titleMobile: {
        marginLeft: '4vw',
        flexGrow: 1
    },
    logo: {
        alignSelf: 'center',
        marginTop: '1rem',
        marginRight: '1rem',
        marginBottom: '0.75rem',
        width: 109,
        height: 35,
    },
    mobileLogo: {
        alignSelf: 'center',
        marginTop: '1rem',
        marginBottom: '0.75rem',
        marginRight: '0.5rem',
        width: '20vw',
        height: 35
    },
    divider: {
        color: '#212328',
        width: 1,
        height: 33,
    },
    report: {
        marginTop: -10,
        marginLeft: '1rem',
        marginRight: 16,
        width: 71,
        height: 13,
        fontFamily: 'ap_display_reg',
        fontSize: 14,
        fontWeight: 'lighter',
        letterSpacing: 3.65,
        color: 'rgba(255,255,255,0.85)',
        alignSelf: 'center',
    },
    mobileReport: {
        marginTop: -12,
        marginLeft: '0.5rem',
        marginRight: '1.75rem',
        width: 71,
        height: 13,
        letterSpacing: 3.65,
        color: 'rgba(255,255,255,0.65)',
        fontSize: 14
    },
    walletMobile: {
        justifyContent: 'flex-end',
    }
}));

const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Hidden xsDown>
                <Toolbar className={classes.toolbar}>
                    <SideDrawer className={classes.drawer}/>
                    <Link href='/' className={classes.title}>
                        <img className={classes.logo} src={comfyLogo} alt='comfy_logo'/>
                    </Link>
                    <Divider className={classes.divider} orientation={"vertical"}/>
                    <Typography className={classes.report}>REPORT</Typography>
                    <Ticker style={{flexGrow: 1}}/>
                    {/*<WalletButton/>*/}
                </Toolbar>
            </Hidden>
            {/* Mobile header formatting */}
            <Hidden smUp>
                <Toolbar className={classes.toolbarMobile}>
                    <SideDrawer className={classes.drawer}/>
                    <Link href='/' className={classes.title}>
                        <img className={classes.mobileLogo} src={comfyLogo} alt='comfy_logo'/>
                    </Link>
                    <Divider className={classes.divider} orientation={"vertical"}/>
                    <Typography className={classes.mobileReport}>REPORT</Typography>
                    {/*<WalletButton className={classes.walletMobile}/>*/}
                </Toolbar>
            </Hidden>
        </div>
    )
}

export default Header;