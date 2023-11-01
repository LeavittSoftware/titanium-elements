/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '../@leavittsoftware/web/titanium/styles/styles';
import '../@leavittsoftware/web/leavitt/profile-picture/profile-picture';
import '../@leavittsoftware/web/leavitt/profile-picture/profile-picture-menu';

/* playground-fold-end */
import '../@leavittsoftware/web/titanium/toolbar/toolbar';

/* playground-fold */
@customElement('titanium-toolbar-playground')
export class TitaniumToolbarPlayground extends LitElement {
  static styles = [
    h1,
    p,
    css`
      :host {
        display: block;
      }

      main {
        margin-top: 48px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      titanium-toolbar {
        display: flex;
        position: relative;
        background-color: aliceblue;
        justify-content: space-between;
      }

      titanium-toolbar a[logo],
      titanium-toolbar img {
        height: 26px;
        /* Prevent shifting on load */
        min-width: 26px;
        cursor: pointer;
      }

      titanium-toolbar a[logo] {
        margin-right: 12px;
      }

      [main-title] {
        margin: 0;
        font-weight: 400;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <titanium-toolbar>
        <a logo title="Back to home">
          <img src="https://www.leavitt.com/application/themes/lg/img/logo/leavitt-group-logo.svg" alt="Company logo" />
        </a>
        <h3 title="boilerplate toolbar" main-title>Boilerplate Toolbar</h3>
        <profile-picture-menu size="36"></profile-picture-menu>
      </titanium-toolbar>
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex quo illud efficitur, qui bene cenent omnis libenter cenare, qui libenter, non continuo
          bene. Quos nisi redarguimus, omnis virtus, omne decus, omnis vera laus deserenda est. Cur fortior sit, si illud, quod tute concedis, asperum et vix
          ferendum putabit? Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis. Duo Reges: constructio
          interrete. Omnia contraria, quos etiam insanos esse vultis. Et homini, qui ceteris animantibus plurimum praestat, praecipue a natura nihil datum esse
          dicemus? Quod equidem non reprehendo; Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Levatio igitur vitiorum magna fit in
          iis, qui habent ad virtutem progressionis aliquantum. Ita est quoddam commune officium sapientis et insipientis, ex quo efficitur versari in iis, quae
          media dicamus. At miser, si in flagitiosa et vitiosa vita afflueret voluptatibus.
        </p>
        <p>
          Semper enim ex eo, quod maximas partes continet latissimeque funditur, tota res appellatur. Quod autem ratione actum est, id officium appellamus. Num
          igitur eum postea censes anxio animo aut sollicito fuisse? Possumusne hic scire qualis sit, nisi contulerimus inter nos, cum finem bonorum dixerimus,
          quid finis, quid etiam sit ipsum bonum? His singulis copiose responderi solet, sed quae perspicua sunt longa esse non debent. Est, ut dicis, inquit;
          Itaque, ne si iucundissimis quidem nos somniis usuros putemus, Endymionis somnum nobis velimus dari, idque si accidat, mortis instar putemus. Non
          minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita
          voluptate.
        </p>
        <p>
          Ista ipsa, quae tu breviter: regem, dictatorem, divitem solum esse sapientem, a te quidem apte ac rotunde; Si quicquam extra virtutem habeatur in
          bonis. Quod enim testimonium maius quaerimus, quae honesta et recta sint, ipsa esse optabilia per sese, cum videamus tanta officia morientis? Effluit
          igitur voluptas corporis et prima quaeque avolat saepiusque relinquit causam paenitendi quam recordandi. Tum, Quintus et Pomponius cum idem se velle
          dixissent, Piso exorsus est. Fortitudinis quaedam praecepta sunt ac paene leges, quae effeminari virum vetant in dolore. Ab hoc autem quaedam non
          melius quam veteres, quaedam omnino relicta. Neque solum ea communia, verum etiam paria esse dixerunt. Illud urgueam, non intellegere eum quid sibi
          dicendum sit, cum dolorem summum malum esse dixerit. Sed id ne cogitari quidem potest quale sit, ut non repugnet ipsum sibi.
        </p>
        <p>
          An est aliquid, quod te sua sponte delectet? Hoc uno captus Erillus scientiam summum bonum esse defendit nec rem ullam aliam per se expetendam. At
          iste non dolendi status non vocatur voluptas. Minime vero istorum quidem, inquit. Non est enim vitium in oratione solum, sed etiam in moribus. Si
          enim, ut mihi quidem videtur, non explet bona naturae voluptas, iure praetermissa est; Ne amores quidem sanctos a sapiente alienos esse arbitrantur.
          Quid vero? At enim, qua in vita est aliquid mali, ea beata esse non potest. At multis malis affectus.
        </p>
        <p>
          Expectoque quid ad id, quod quaerebam, respondeas. Bona autem corporis huic sunt, quod posterius posui, similiora. Suis cuiusque sensibus sic, ut,
          contra si quis dicere velit, non audiatur -, tamen, ne quid praetermittamus, rationes quoque, cur hoc ita sit, afferendas puto. An est aliquid per se
          ipsum flagitiosum, etiamsi nulla comitetur infamia? Et homini, qui ceteris animantibus plurimum praestat, praecipue a natura nihil datum esse dicemus?
          Theophrasti igitur, inquit, tibi liber ille placet de beata vita? Expressa vero in iis aetatibus, quae iam confirmatae sunt. Ait enim se, si uratur,
          Quam hoc suave! dicturum. Commoda autem et incommoda in eo genere sunt, quae praeposita et reiecta diximus;
        </p>
      </main>
    `;
  }
}
