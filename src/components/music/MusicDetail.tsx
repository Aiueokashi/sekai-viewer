import {
  CardMedia,
  CircularProgress,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  Tab,
  Tabs,
  Typography,
  Container,
  Switch,
  useTheme,
} from "@material-ui/core";
import { useLayoutStyles } from "../../styles/layout";
import { useInteractiveStyles } from "../../styles/interactive";
import { Alert, TabContext, TabPanel } from "@material-ui/lab";
import { Close, Done } from "@material-ui/icons";
import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import Viewer from "react-viewer";
// import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
import {
  IMusicAchievement,
  IMusicDanceMembers,
  IMusicDifficultyInfo,
  IMusicInfo,
  IMusicTagInfo,
  IMusicVocalInfo,
  IOutCharaProfile,
} from "../../types";
import {
  getRemoteAssetURL,
  musicTagToName,
  useCachedData,
  useCharaName,
} from "../../utils";
import { charaIcons } from "../../utils/resources";
import { Trans, useTranslation } from "react-i18next";
import { useAssetI18n } from "../../utils/i18n";
import { useDurationI18n } from "../../utils/i18nDuration";
import { useTrimMP3 } from "../../utils/trimMP3";
import MusicVideoPlayer from "../subs/MusicVideoPlayer";
import { SettingContext } from "../../context";
import { ContentTrans, ReleaseCondTrans } from "../subs/ContentTrans";
import ResourceBox from "../subs/ResourceBox";
import AudioPlayer from "./AudioPlayer";
import { Howl } from "howler";
import { saveAs } from "file-saver";

const useStyles = makeStyles((theme) => ({
  "rarity-star-img": {
    maxWidth: "32px",
    margin: theme.spacing(0, 0.25),
  },
  "card-thumb-img": {
    maxWidth: "100%",
    // margin: theme.spacing(0, 1),
  },
  "unit-logo-img": {
    maxWidth: "128px",
    // margin: theme.spacing(0, 1),
  },
  "media-contain": {
    [theme.breakpoints.up("md")]: {
      paddingTop: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "100%",
    },
    backgroundSize: "contain",
    cursor: "pointer",
    margin: theme.spacing(1, 0),
  },
  tabpanel: {
    padding: 0,
  },
  "grid-out": {
    padding: theme.spacing("1%", "0"),
  },
}));

const MusicDetail: React.FC<{}> = () => {
  const theme = useTheme();
  const classes = useStyles();
  const layoutClasses = useLayoutStyles();
  const interactiveClasses = useInteractiveStyles();
  const { t } = useTranslation();
  const { getTranslated } = useAssetI18n();
  const { contentTransMode } = useContext(SettingContext)!;
  const [, humanizeDurationShort] = useDurationI18n();
  const [trimmedMP3URL, trimFailed, setTrimOptions] = useTrimMP3();
  const getCharaName = useCharaName(contentTransMode);

  const [musics] = useCachedData<IMusicInfo>("musics");
  const [musicVocals] = useCachedData<IMusicVocalInfo>("musicVocals");
  const [musicDiffis] = useCachedData<IMusicDifficultyInfo>(
    "musicDifficulties"
  );
  const [musicTags] = useCachedData<IMusicTagInfo>("musicTags");
  // const [gameCharas] = useCachedData<IGameChara>('gameCharacters');
  const [outCharas] = useCachedData<IOutCharaProfile>("outsideCharacters");
  // const [releaseConds] = useCachedData<IReleaseCondition>("releaseConditions");
  const [danceMembers] = useCachedData<IMusicDanceMembers>("musicDanceMembers");
  const [musicAchievements] = useCachedData<IMusicAchievement>(
    "musicAchievements"
  );

  const { musicId } = useParams<{ musicId: string }>();

  const [visible, setVisible] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [music, setMusic] = useState<IMusicInfo>();
  const [musicVocal, setMusicVocal] = useState<IMusicVocalInfo[]>([]);
  const [musicVocalTypes, setMusicVocalTypes] = useState<string[]>([]);
  const [
    musicDanceMember,
    setMusicDanceMember,
  ] = useState<IMusicDanceMembers>();
  const [
    selectedPreviewVocalType,
    setSelectedPreviewVocalType,
  ] = useState<number>(0);
  const [selectedVocalType, setSelectedVocalType] = useState<number>(0);
  const [vocalPreviewVal, setVocalPreviewVal] = useState<string>("1");
  const [vocalDisabled, setVocalDisabled] = useState<boolean>(false);
  const [diffiInfoTabVal, setDiffiInfoTabVal] = useState<string>("4");
  const [actualPlaybackTime, setActualPlaybackTime] = useState<string>("");
  const [trimSilence, setTrimSilence] = useState<boolean>(false);
  const [trimLoading, setTrimLoading] = useState<boolean>(true);
  const [longMusicPlaybackURL, setLongMusicPlaybackURL] = useState<
    string | undefined
  >();
  const [
    trimmedLongMusicPlaybackURL,
    setTrimmedLongMusicPlaybackURL,
  ] = useState<string | undefined>();
  const [shortMusicPlaybackURL, setShortMusicPlaybackURL] = useState<
    string | undefined
  >();
  const [musicVideoURL, setMusicVideoURL] = useState<string>("");

  useEffect(() => {
    if (music) {
      document.title = t("title:musicDetail", {
        title: getTranslated(
          contentTransMode,
          `music_titles:${musicId}`,
          music.title
        ),
      });
    }
  }, [music, musicId, contentTransMode, getTranslated, t]);

  useEffect(() => {
    if (musics && musics.length) {
      setMusic(musics.find((elem) => elem.id === Number(musicId)));
    }
  }, [musics, musicId]);

  useEffect(() => {
    if (musicVocals && musicVocals.length) {
      setMusicVocal(
        musicVocals.filter((elem) => elem.musicId === Number(musicId))
      );
    }
  }, [musicVocals, musicId]);

  useEffect(() => {
    if (musicVocal.length) {
      setMusicVocalTypes(musicVocal.map((elem) => elem.musicVocalType));
    }
  }, [musicVocal]);

  useEffect(() => {
    if (danceMembers && danceMembers.length) {
      setMusicDanceMember(
        danceMembers.find((elem) => elem.musicId === Number(musicId))
      );
    }
  }, [danceMembers, musicId]);

  useEffect(() => {
    if (music && musicVocal && musicVocal[selectedPreviewVocalType]) {
      getRemoteAssetURL(
        `music/long/${musicVocal[selectedPreviewVocalType].assetbundleName}_rip/${musicVocal[selectedPreviewVocalType].assetbundleName}.mp3`,
        setLongMusicPlaybackURL,
        window.isChinaMainland
      );
      getRemoteAssetURL(
        `music/short/${musicVocal[selectedPreviewVocalType].assetbundleName}_rip/${musicVocal[selectedPreviewVocalType].assetbundleName}_short.mp3`,
        setShortMusicPlaybackURL,
        window.isChinaMainland
      );
    }
  }, [music, musicVocal, selectedPreviewVocalType]);

  useEffect(() => {
    if (music && musicVocal && musicVocal[selectedPreviewVocalType]) {
      getRemoteAssetURL(
        `live/2dmode/${
          vocalPreviewVal === "original"
            ? "original_mv"
            : vocalPreviewVal === "mv_2d"
            ? "sekai_mv"
            : ""
        }/${String(music.id).padStart(4, "0")}_rip/${String(music.id).padStart(
          4,
          "0"
        )}.mp4`,
        setMusicVideoURL,
        window.isChinaMainland
      );
    }
  }, [music, musicVocal, selectedPreviewVocalType, vocalPreviewVal]);

  useEffect(() => {
    if (
      vocalPreviewVal === "1" &&
      musicVocal &&
      musicVocal[selectedPreviewVocalType] &&
      music &&
      longMusicPlaybackURL
    ) {
      setTrimOptions({
        sourceURL: longMusicPlaybackURL,
        trimDuration: music.fillerSec,
        inclusive: false,
      });
      setTrimLoading(true);
    } else {
      setTrimOptions(undefined);
      setTrimLoading(false);
    }
  }, [
    music,
    musicVocal,
    selectedPreviewVocalType,
    vocalPreviewVal,
    setTrimOptions,
    setTrimLoading,
    longMusicPlaybackURL,
  ]);

  useEffect(() => {
    if (
      musicVocal &&
      musicVocal[selectedPreviewVocalType] &&
      music &&
      trimmedMP3URL
    ) {
      setTrimmedLongMusicPlaybackURL(trimmedMP3URL);
    } else {
      setTrimmedLongMusicPlaybackURL(undefined);
    }
  }, [music, musicVocal, selectedPreviewVocalType, trimmedMP3URL]);

  const getVocalCharaIcons: (index: number) => JSX.Element = useCallback(
    (index: number) => {
      return (
        <Grid container spacing={1} alignItems="center">
          {musicVocal[index].characters.map((chara) =>
            chara.characterType === "game_character" ? (
              <Grid item key={`chara-${chara.characterId}`}>
                <img
                  key={chara.characterId}
                  height="42"
                  src={charaIcons[`CharaIcon${chara.characterId}`]}
                  alt={`character ${chara.characterId}`}
                ></img>
              </Grid>
            ) : (
              <Grid item key={`outchara-${chara.characterId}`}>
                <span>
                  {outCharas && outCharas.length
                    ? outCharas.find((elem) => elem.id === chara.characterId)!
                        .name
                    : `Outside Character ${chara.characterId}`}
                </span>
              </Grid>
            )
          )}
        </Grid>
      );
    },
    [musicVocal, outCharas]
  );

  const [musicJacket, setMusicJacket] = useState<string>("");

  useEffect(() => {
    if (music) {
      getRemoteAssetURL(
        `music/jacket/${music.assetbundleName}_rip/${music.assetbundleName}.webp`,
        setMusicJacket,
        window.isChinaMainland
      );
    }
  }, [music]);

  const getCharaIcon: (characterId: number) => JSX.Element = useCallback(
    (characterId) => {
      if (!characterId) return <span></span>;
      return (
        <Grid item key={`chara-${characterId}`}>
          <img
            key={characterId}
            height="42"
            src={charaIcons[`CharaIcon${characterId}`]}
            alt={`character ${characterId}`}
          ></img>
        </Grid>
      );
    },
    []
  );

  const onPlay = useCallback(() => {
    if ("mediaSession" in window.navigator) {
      window.navigator.mediaSession!.metadata = new MediaMetadata({
        title: music?.title,
        artist: music?.composer,
        album: musicVocal[selectedPreviewVocalType].caption,
        artwork: [
          {
            src: musicJacket,
            sizes: "740x740",
            type: "image/webp",
          },
        ],
      });
    }
  }, [music, musicVocal, musicJacket, selectedPreviewVocalType]);

  const getActalPlaybackTime = useCallback(
    (howl: Howl) => {
      if (!music || !!actualPlaybackTime) return;
      const durationMsec = (howl.duration() - music.fillerSec) * 1000;
      setActualPlaybackTime(
        `${humanizeDurationShort(durationMsec, {
          units: ["s"],
          delimiter: " ",
          spacer: "",
          maxDecimalPoints: 1,
        })} (${humanizeDurationShort(durationMsec, {
          units: ["m", "s"],
          delimiter: " ",
          spacer: "",
          maxDecimalPoints: 1,
        })})`
      );
    },
    [actualPlaybackTime, humanizeDurationShort, music]
  );

  const onSave = useCallback(
    (src: string) => {
      console.log(src);
      saveAs(
        src,
        `${music?.title}-${
          selectedPreviewVocalType === 0 ? "full" : "preview"
        }.mp3`
      );
    },
    [music, selectedPreviewVocalType]
  );

  const VocalTypeSelector: React.FC<{
    vocalType: number;
    onSelect: (value: number) => void;
  }> = useCallback(
    ({ vocalType, onSelect }) => {
      return (
        <Grid
          item
          container
          xs={12}
          alignItems="center"
          justify="space-between"
        >
          <Grid item xs={12} md={2}>
            <Typography classes={{ root: interactiveClasses.caption }}>
              {t("music:vocal")}
            </Typography>
          </Grid>
          <Grid item container xs={12} md={9} spacing={1}>
            <FormControl disabled={vocalDisabled}>
              <RadioGroup
                row
                aria-label="vocal type"
                name="vocal-type"
                value={vocalType}
                onChange={(e, v) => onSelect(Number(v))}
              >
                {musicVocalTypes.map((elem, idx) => (
                  <FormControlLabel
                    key={`vocal-type-${idx}`}
                    value={idx}
                    control={<Radio color="primary"></Radio>}
                    label={getVocalCharaIcons(idx)}
                    labelPlacement="end"
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      );
    },
    [
      interactiveClasses.caption,
      t,
      vocalDisabled,
      musicVocalTypes,
      getVocalCharaIcons,
    ]
  );

  return music && musicVocals && musicVocals.length ? (
    <Fragment>
      <Typography variant="h6" className={layoutClasses.header}>
        {getTranslated(
          contentTransMode,
          `music_titles:${musicId}`,
          music.title
        )}
      </Typography>
      <Container className={layoutClasses.content} maxWidth="sm">
        <Alert severity="warning">
          <Trans i18nKey="music:alert[0]" components={{ b: <b /> }} />
        </Alert>
        <CardMedia
          onClick={() => {
            setActiveIdx(0);
            setVisible(true);
          }}
          classes={{ root: classes["media-contain"] }}
          image={musicJacket}
        ></CardMedia>
        <Paper className={interactiveClasses.container}>
          <Grid container direction="column" spacing={1}>
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              justify="space-between"
            >
              <Grid item xs={12} md={2}>
                <Typography classes={{ root: interactiveClasses.caption }}>
                  {t("common:type")}
                </Typography>
              </Grid>
              <Grid item container xs={12} md={9} spacing={1}>
                <RadioGroup
                  row
                  aria-label="vocal preview"
                  name="vocal-preview"
                  value={vocalPreviewVal}
                  onChange={(e, v) => {
                    setVocalPreviewVal(v);
                    setVocalDisabled(false);
                  }}
                >
                  <FormControlLabel
                    value="0"
                    control={<Radio color="primary"></Radio>}
                    label={t("music:vocalTab.title[0]")}
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary"></Radio>}
                    label={t("music:vocalTab.title[1]")}
                    labelPlacement="end"
                  />
                  {music.categories
                    .filter((cat) => ["original", "mv_2d"].includes(cat))
                    .map((cat) => (
                      <FormControlLabel
                        value={cat}
                        control={<Radio color="primary"></Radio>}
                        label={t(`music:categoryType.${cat}`)}
                        labelPlacement="end"
                      />
                    ))}
                </RadioGroup>
              </Grid>
            </Grid>
            <VocalTypeSelector
              vocalType={selectedPreviewVocalType}
              onSelect={(v) => setSelectedPreviewVocalType(v)}
            />
            {vocalPreviewVal === "1" ? (
              <Grid
                item
                container
                xs={12}
                alignItems="center"
                justify="space-between"
              >
                <Grid item xs={12} md={2}>
                  <Typography classes={{ root: interactiveClasses.caption }}>
                    {t("music:skipBeginningSilence")}
                  </Typography>
                </Grid>
                <Grid item container xs={12} md={9} spacing={1}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={trimSilence}
                        onChange={() => setTrimSilence((v) => !v)}
                        disabled={!trimmedMP3URL || trimFailed}
                      />
                    }
                    label={
                      trimFailed ? (
                        // failed
                        <Close style={{ color: theme.palette.error.main }} />
                      ) : trimmedMP3URL ? (
                        // success
                        <Done style={{ color: theme.palette.success.main }} />
                      ) : trimLoading ? (
                        // loading
                        <CircularProgress
                          size="1em"
                          style={{ marginLeft: "0.2em" }}
                        />
                      ) : null
                    }
                  />
                </Grid>
              </Grid>
            ) : null}
          </Grid>
        </Paper>
        {vocalPreviewVal === "0" &&
          musicVocalTypes.length &&
          musicVocal.length &&
          shortMusicPlaybackURL && (
            <AudioPlayer
              src={shortMusicPlaybackURL}
              onPlay={onPlay}
              onSave={onSave}
            />
          )}
        {vocalPreviewVal === "1" &&
          musicVocalTypes.length &&
          musicVocal.length &&
          longMusicPlaybackURL && (
            <AudioPlayer
              src={
                trimSilence && trimmedLongMusicPlaybackURL
                  ? trimmedLongMusicPlaybackURL
                  : longMusicPlaybackURL
              }
              onPlay={onPlay}
              onLoad={getActalPlaybackTime}
              onSave={onSave}
            />
          )}
        {["original", "mv_2d"].includes(vocalPreviewVal) &&
          musicVocalTypes.length &&
          musicVocal.length &&
          longMusicPlaybackURL && (
            <MusicVideoPlayer
              audioPath={longMusicPlaybackURL}
              videoPath={musicVideoURL}
              onPlay={() => setVocalDisabled(true)}
              onPause={() => setVocalDisabled(false)}
              onEnded={() => setVocalDisabled(false)}
            />
          )}

        <Grid className={classes["grid-out"]} container direction="column">
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              {t("common:id")}
            </Typography>
            <Typography>{music.id}</Typography>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
                {t("common:title")}
              </Typography>
            </Grid>
            <Grid item>
              <ContentTrans
                contentKey={`music_titles:${musicId}`}
                original={music.title}
                originalProps={{ align: "right" }}
                translatedProps={{ align: "right" }}
              />
            </Grid>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              {t("music:tag", {
                count:
                  musicTags &&
                  musicTags.filter((elem) => elem.musicId === music.id).length,
              })}
            </Typography>
            <Grid item>
              {musicTags &&
                musicTags
                  .filter((elem) => elem.musicId === music.id)
                  .map((elem) => (
                    <Typography
                      align="right"
                      key={`music-tag-${elem.musicTag}`}
                    >
                      {musicTagToName[elem.musicTag] || elem.musicTag}
                    </Typography>
                  ))}
            </Grid>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              {t("music:category", { count: music.categories.length })}
            </Typography>
            <Grid item>
              {music.categories.map((elem) => (
                <Typography align="right" key={`music-cat-${elem}`}>
                  {t(`music:categoryType.${elem}`)}
                </Typography>
              ))}
            </Grid>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              {t("music:actualPlaybackTime")}
            </Typography>
            <Typography>{actualPlaybackTime}</Typography>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              {t("music:arranger")}
            </Typography>
            <Typography>{music.arranger}</Typography>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              {t("music:composer")}
            </Typography>
            <Typography>{music.composer}</Typography>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              {t("music:lyricist")}
            </Typography>
            <Typography>{music.lyricist}</Typography>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              {musicDanceMember
                ? t("music:danceMember", { count: music.dancerCount })
                : t("music:dancerCount")}
            </Typography>
            <Grid item>
              <Grid container spacing={1}>
                {musicDanceMember
                  ? Array.from({ length: music.dancerCount }).map((_, idx) =>
                      getCharaIcon(
                        musicDanceMember[
                          `characterId${idx + 1}` as
                            | "characterId1"
                            | "characterId2"
                            | "characterId3"
                            | "characterId4"
                            | "characterId5"
                        ]!
                      )
                    )
                  : music.dancerCount}
              </Grid>
            </Grid>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
          <Grid
            container
            direction="row"
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              {t("common:startAt")}
            </Typography>
            <Typography>
              {new Date(music.publishedAt).toLocaleString()}
            </Typography>
          </Grid>
          <Divider style={{ margin: "1% 0" }} />
        </Grid>
      </Container>
      <Typography variant="h6" className={layoutClasses.header}>
        {t("music:vocal", { count: musicVocal.length })}
      </Typography>
      <Container className={layoutClasses.content} maxWidth="sm">
        <Paper className={interactiveClasses.container}>
          <Grid container direction="column" spacing={1}>
            <VocalTypeSelector
              vocalType={selectedVocalType}
              onSelect={(v) => setSelectedVocalType(v)}
            />
          </Grid>
        </Paper>
        {musicVocal.length && musicVocal[selectedVocalType] ? (
          <Grid className={classes["grid-out"]} container direction="column">
            <Grid
              item
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
                {t("common:character", {
                  count: musicVocal[selectedVocalType].characters.length,
                })}
              </Typography>
              {/* <Grid item>{getVocalCharaIcons(selectedVocalType)}</Grid> */}
              <Grid item>
                <Grid container direction="column">
                  {musicVocal[selectedVocalType].characters.map((chara) =>
                    chara.characterType === "game_character" ? (
                      <Grid item key={`chara-${chara.characterId}`}>
                        <Typography align="right">
                          {getCharaName(chara.characterId)}
                        </Typography>
                      </Grid>
                    ) : (
                      <Grid item key={`outchara-${chara.characterId}`}>
                        <Typography align="right">
                          {outCharas && outCharas.length
                            ? outCharas.find(
                                (elem) => elem.id === chara.characterId
                              )!.name
                            : `Outside Character ${chara.characterId}`}
                        </Typography>
                      </Grid>
                    )
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Divider style={{ margin: "1% 0" }} />
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
                    {t("common:releaseCondition")}
                  </Typography>
                </Grid>
                <Grid item>
                  <ReleaseCondTrans
                    releaseCondId={
                      musicVocal[selectedVocalType].releaseConditionId
                    }
                    originalProps={{ align: "right" }}
                    translatedProps={{ align: "right" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Divider style={{ margin: "1% 0" }} />
            <Grid item container direction="row" justify="space-between">
              <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
                {t("music:vocalType")}
              </Typography>
              <ContentTrans
                contentKey={`music_vocal:${musicVocal[selectedVocalType].musicVocalType}`}
                original={musicVocal[selectedVocalType].musicVocalType}
              />
            </Grid>
            <Divider style={{ margin: "1% 0" }} />
          </Grid>
        ) : null}
      </Container>
      <Typography variant="h6" className={layoutClasses.header}>
        {t("music:difficulty", {
          count:
            musicDiffis &&
            musicDiffis.filter((elem) => elem.musicId === Number(musicId))
              .length,
        })}
      </Typography>
      {musicDiffis && !!musicDiffis.length && (
        <Container className={layoutClasses.content} maxWidth="sm">
          <TabContext value={diffiInfoTabVal}>
            <Paper className={interactiveClasses.container}>
              <Tabs
                value={diffiInfoTabVal}
                onChange={(e, v) => {
                  setDiffiInfoTabVal(v);
                }}
                variant="scrollable"
                scrollButtons="desktop"
              >
                {musicDiffis
                  .filter((elem) => elem.musicId === Number(musicId))
                  .map((elem, idx) => (
                    <Tab
                      key={`diffi-info-tab-${idx}`}
                      label={elem.musicDifficulty}
                      value={String(idx)}
                    ></Tab>
                  ))}
              </Tabs>
            </Paper>
            {musicDiffis
              .filter((elem) => elem.musicId === Number(musicId))
              .map((elem, idx) => (
                <TabPanel
                  value={String(idx)}
                  key={`diffi-info-tab-panel-${idx}`}
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <Grid container direction="column">
                    <Grid
                      item
                      container
                      direction="row"
                      justify="space-between"
                    >
                      <Typography
                        variant="subtitle1"
                        style={{ fontWeight: 600 }}
                      >
                        {t("common:level")}
                      </Typography>
                      <Grid item>{elem.playLevel}</Grid>
                    </Grid>
                    <Divider style={{ margin: "1% 0" }} />
                    <Grid
                      item
                      container
                      direction="row"
                      justify="space-between"
                    >
                      <Typography
                        variant="subtitle1"
                        style={{ fontWeight: 600 }}
                      >
                        {t("music:noteCount")}
                      </Typography>
                      <Grid item>{elem.noteCount}</Grid>
                    </Grid>
                    <Divider style={{ margin: "1% 0" }} />
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                      >
                        <Grid item>
                          <Typography
                            variant="subtitle1"
                            style={{ fontWeight: 600 }}
                          >
                            {t("common:releaseCondition")}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <ReleaseCondTrans
                            releaseCondId={elem.releaseConditionId}
                            originalProps={{ align: "right" }}
                            translatedProps={{ align: "right" }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Divider style={{ margin: "1% 0" }} />
                  </Grid>
                </TabPanel>
              ))}
          </TabContext>
        </Container>
      )}
      <Typography variant="h6" className={layoutClasses.header}>
        {t("music:achievement")}
      </Typography>
      {musicAchievements &&
        !!musicAchievements.length &&
        musicDiffis &&
        !!musicDiffis.length && (
          <Container className={layoutClasses.content} maxWidth="sm">
            <Grid container direction="column">
              <Grid item container justify="space-between" alignItems="center">
                <Grid item xs={2}>
                  <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
                    {t("music:scoreRankAchievement.title")}
                  </Typography>
                </Grid>
                <Grid item xs={9} container spacing={1}>
                  <Grid item xs={6} md={3} container direction="column">
                    <Grid item>
                      <Typography align="center">
                        {t("music:scoreRankAchievement.rankC")}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <ResourceBox
                        resourceBoxId={musicAchievements[0].resourceBoxId}
                        resourceBoxPurpose="music_achievement"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={6} md={3} container direction="column">
                    <Grid item>
                      <Typography align="center">
                        {t("music:scoreRankAchievement.rankB")}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <ResourceBox
                        resourceBoxId={musicAchievements[1].resourceBoxId}
                        resourceBoxPurpose="music_achievement"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={6} md={3} container direction="column">
                    <Grid item>
                      <Typography align="center">
                        {t("music:scoreRankAchievement.rankA")}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <ResourceBox
                        resourceBoxId={musicAchievements[2].resourceBoxId}
                        resourceBoxPurpose="music_achievement"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={6} md={3} container direction="column">
                    <Grid item>
                      <Typography align="center">
                        {t("music:scoreRankAchievement.rankS")}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <ResourceBox
                        resourceBoxId={musicAchievements[3].resourceBoxId}
                        resourceBoxPurpose="music_achievement"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider style={{ margin: "1% 0" }} />
              {["easy", "normal", "hard", "expert", "master"].map((diffi) => {
                const achieves = musicAchievements.filter(
                  (ma) => ma.musicDifficultyType === diffi
                );
                return (
                  <Fragment key={diffi}>
                    <Grid
                      item
                      container
                      justify="space-between"
                      alignItems="center"
                    >
                      <Grid item xs={2}>
                        <Typography
                          variant="subtitle1"
                          style={{
                            fontWeight: 600,
                            textTransform: "capitalize",
                          }}
                        >
                          {diffi}
                        </Typography>
                      </Grid>
                      <Grid item xs={9} container spacing={1}>
                        {achieves.map((achieve) => (
                          <Grid
                            key={achieve.id}
                            item
                            xs={6}
                            md={3}
                            container
                            direction="column"
                          >
                            <Grid item>
                              <Typography align="center">
                                {Math.floor(
                                  musicDiffis.find(
                                    (elem) =>
                                      elem.musicId === Number(musicId) &&
                                      elem.musicDifficulty === diffi
                                  )!.noteCount *
                                    Number(achieve.musicAchievementTypeValue)
                                )}
                              </Typography>
                            </Grid>
                            <Grid item>
                              <ResourceBox
                                resourceBoxId={achieve.resourceBoxId}
                                resourceBoxPurpose="music_achievement"
                              />
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                    <Divider style={{ margin: "1% 0" }} />
                  </Fragment>
                );
              })}
            </Grid>
          </Container>
        )}

      <Viewer
        visible={visible}
        onClose={() => setVisible(false)}
        images={[
          {
            src: musicJacket,
            alt: "music jacket",
            downloadUrl: musicJacket,
          },
        ]}
        zIndex={2000}
        activeIndex={activeIdx}
        downloadable
        downloadInNewWindow
        onMaskClick={() => setVisible(false)}
        onChange={(_, idx) => setActiveIdx(idx)}
        zoomSpeed={0.25}
      />
    </Fragment>
  ) : (
    <div>
      Loading... If you saw this for a while, music {musicId} does not exist.
    </div>
  );
};

export default MusicDetail;
