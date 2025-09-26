import { Link } from "react-router-dom";

export default function MentionsLegales() {
  return (
    <div className="bg-gray-700 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-300 rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Mentions Légales
          </h1>
          
          <div className="space-y-8 leading-relaxed">
            {/* Éditeur du site */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Éditeur du site
              </h2>
              <p className="mb-2">
                <strong>Nom :</strong> Emmanuelle Eiselé
              </p>
              <p className="mb-2">
                <strong>Statut :</strong> Développeuse Web & Mobile 
              </p>
              <p className="mb-2">
                <strong>Email :</strong> emmanuelle@exemple.com
              </p>
              <p className="mb-2">
                <strong>Téléphone :</strong> +33 7 81 40 13 71
              </p>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Hébergement
              </h2>
              <p>
                Ce site est hébergé par <strong>[Nom de l'hébergeur]</strong>
                <br />
                Adresse : [Adresse de l'hébergeur]
                <br />
                Site web : [URL de l'hébergeur]
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale 
                sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                reproduction sont réservés, y compris pour les documents téléchargeables 
                et les représentations iconographiques et photographiques.
              </p>
              <p className="mt-4">
                La reproduction de tout ou partie de ce site sur un support électronique 
                quel qu'il soit est formellement interdite sauf autorisation expresse 
                d'Emmanuelle Eiselé.
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Protection des données personnelles
              </h2>
              <p>
                Ce site portfolio ne collecte aucune donnée personnelle. Aucun formulaire 
                de contact, aucun cookie, aucun système de tracking n'est utilisé sur ce site.
              </p>
              <p className="mt-4">
                Si vous souhaitez me contacter, utilisez l'adresse email mentionnée 
                ci-dessus. Vos communications par email restent privées et ne sont 
                partagées avec aucun tiers.
              </p>
            </section>

            {/* Limitation de responsabilité */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Limitation de responsabilité
              </h2>
              <p>
                Les informations contenues sur ce site sont aussi précises que possible 
                et le site est périodiquement remis à jour, mais peut toutefois contenir 
                des inexactitudes, des omissions ou des lacunes.
              </p>
              <p className="mt-4">
                Emmanuelle Eiselé ne pourra en aucun cas être tenue responsable de tout 
                dommage de quelque nature qu'il soit résultant de l'interprétation ou 
                de l'utilisation des informations et/ou documents disponibles sur ce site.
              </p>
            </section>

            {/* Liens externes */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Liens externes
              </h2>
              <p>
                Ce site peut contenir des liens vers d'autres sites (GitHub, projets en ligne, etc.). 
                Emmanuelle Eiselé ne saurait être responsable du contenu de ces sites externes 
                ni des dommages qui pourraient résulter de leur utilisation.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Droit applicable et juridiction
              </h2>
              <p>
                Les présentes mentions légales sont soumises au droit français. 
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact
              </h2>
              <p>
                Pour toute question concernant ces mentions légales, vous pouvez me contacter à :
              </p>
              <Link to="mailto:emmanuelle.eisele@outlook.com" className="mt-2 hover:text-blue-500">
                <strong>Email :</strong> emmanuelle.eisele@outlook.com
              </Link>
            </section>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}