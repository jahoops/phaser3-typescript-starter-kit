import { MenuButton } from '../ui/menu-button';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'MainMenu',
};

/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }

  public create() {
   
    this.add.image(250, 250, 'background'); 
    const ice = this.add.sprite(450,450,'icetree');
    this.anims.create({
      key: 'grow',
      frames: this.anims.generateFrameNumbers('icetree', { start: 0, end: 29 }),
      frameRate: 5,
      repeat: -1
    });
    ice.anims.play('grow');
    const santa = this.add.sprite(950,150,'santabike');
    this.anims.create({
      key: 'ride',
      frames: this.anims.generateFrameNumbers('santabike', { start: 0, end: 23 }),
      frameRate: 10,
      repeat: -1
    });
    santa.anims.play('ride');

    this.add.text(100, 50, 'This is a sample main menu. Click the "Start" button below to run your game.', { fill: '#FFFFFF' }).setFontSize(24);

    new MenuButton(this, 100, 150, 'Start Game', () => {
      this.scene.start('Game');
    });

    new MenuButton(this, 100, 250, 'Settings', () => console.log('settings button clicked'));

    new MenuButton(this, 100, 350, 'Help', () => console.log('help button clicked'));
  }
}
