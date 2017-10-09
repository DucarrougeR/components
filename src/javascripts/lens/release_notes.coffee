m = angular.module "lens.release_notes", []


m.controller "ReleaseNotesController", ['$scope', (
  $scope
) ->
  return this
]


m.directive "releaseNotes", ->
  controller: "ReleaseNotesController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="release-notes">
    <div class="col-container">
      <div class="col col-10-md">
        <p class="text-color-light">0.1.0</p>
      </div>
      <div class="col col-90-md">
        <p class="bold">The Initial Vector</p>
        <p class="text-6 text-color-light">September 19, 2017</p>
        <ul class="text-6">
          <li>Initial merge into Helltool.</li>
        </ul>
      </div>
    </div>

    <div class="col-container">
      <div class="col col-10-md">
        <p class="text-color-light">0.1.1</p>
      </div>
      <div class="col col-90-md">
        <p class="bold">Removing <code>-xs</code> and unnecessary nesting</p>
        <p class="text-6 text-color-light">October 9, 2017</p>
        <ul class="text-6">
          <li>Remove <code>-xs</code> suffix for all default atom styles.</li>
          <li>Refactor all stylesheets to use nesting more sparingly, which meant removing almost all instances of <code>&-</code> nesting.
        </ul>
      </div>
    </div>
  </section>

</lens-main>
"""
